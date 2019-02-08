(do
  (def! fix* (
    fn* (f) (
      (fn* (x) (f (fn* (& ys) (apply (x x) ys))))
      (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))

  (def! memfix* (
    fn* (f) (
      let* (cache {}) (
        (fn* (x cache) (
          f
            (fn* (z) (
              if (contains? cache z)
                (get cache z)
                (let* (result ((fn* (y) ((x x cache) y)) z)) (
                  do
                    (set! cache z result)
                    result))))
            cache))
        (fn* (x cache) (
          f
            (fn* (z) (
              if (contains? cache z)
                (get cache z)
                (let* (result ((fn* (y) ((x x cache) y)) z)) (
                  do
                    (set! cache z result)
                    result))))
            cache))
        cache))))

  (def! _0 car)

  (def! _1 (fn* (xs) (nth 1 xs)))

  (def! _2 (fn* (xs) (nth 2 xs)))

  (def! swap! (
    macro* (atom & xs) (
      if (empty? xs)
        atom
        `(let* (-atom- ~atom) (
          do
            (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))
            (deref -atom-))))))

  (def! *gensym-counter* (atom 0))

  (def! gensym (
      fn* () (symbol (string "G__" (swap! *gensym-counter* incr)))))

  (def! or (
    macro* (& xs) (
      if (empty? xs)
        false
        (let* (-query- (gensym))
          `(let* (~-query- ~(car xs)) (
            if ~-query-
              ~-query-
              (or ~@(cdr xs))))))))

  (def! and (
    macro* (& xs) (
      if (empty? xs)
        true
        (let* (-query- (gensym))
          `(let* (~-query- ~(car xs)) (
            if ~-query-
              (and ~@(cdr xs))
              false))))))

  (def! cond (
    macro* (& xs) (
      if (empty? xs)
        nil
        (if (empty? (cdr xs))
          (throw "`cond` requires an even number of forms.")
          (let* (-query- (gensym))
            `(let* (~-query- ~(car xs)) (
              if ~-query-
                ~(_1 xs)
                (cond ~@(cdr (cdr xs))))))))))

  (def! loop (
    macro* (form0 form1)
      `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (
        loop ~(_1 form0)))))

  (def! -> (
    macro* (& xs) (
      if (empty? xs)
        nil
        (let* (x (car xs), xs (cdr xs)) (
          if (empty? xs)
            x
            (let* (form (car xs), forms (cdr xs)) (
              if (empty? forms)
                (if (list? form)
                  (if (= (symbol "fn*") (car form))
                    `(~form ~x)
                    `(~(car form) ~x ~@(cdr form)))
                  (list form x))
                `(-> (-> ~x ~form) ~@forms))))))))

  (def! ->> (
    macro* (& xs) (
      if (empty? xs)
        nil
        (let* (x (car xs), xs (cdr xs)) (
          if (empty? xs)
            x
            (let* (form (car xs), forms (cdr xs)) (
              if (empty? forms)
                (if (list? form)
                  (if (= (symbol "fn*") (car form))
                    `(~form ~x)
                    `(~@form ~x))
                  (list form x))
                `(->> (->> ~x ~form) ~@forms))))))))

  (def! ->* (macro* (& xs) (
    let* (x (gensym))
      `(fn* (~x) (-> ~x ~@xs)))))

  (def! ->>* (macro* (& xs) (
    let* (x (gensym))
      `(fn* (~x) (->> ~x ~@xs)))))

  (def! not (fn* (x) (if x false true)))

  (def! incr (->* (+ 1)))

  (def! decr (->* (- 1)))

  (def! zero? (->* (= 0)))

  (def! identity (fn* (x) x))

  (def! constant-fn (fn* (x) (fn* (y) x)))

  (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))

  (def! step-into-list (
    fn* (xs fn0 fn1) (
      let* (x (car xs), -xs- (cdr xs)) (
        if (empty? -xs-)
          (fn1 x)
          (fn0 x -xs-)))))

  (def! apply-on (
    fn* (& xs) (
      step-into-list
        xs
        (fn* (arguments -xs-) (apply (car -xs-) arguments))
        (fn* (arguments) (fn* (f) (apply f arguments))))))

  (def! reduce (
    fn* (f seed xs) (
      if (empty? xs)
        seed
        (reduce f (f seed (car xs)) (cdr xs)))))

  (def! filter (
    fn* (predicate xs) (
      reverse (
        reduce
          (fn* (memo x) (if (predicate x) (cons x memo) memo))
          '()
          xs))))

  (def! map (
    fn* (f xs) (
      reverse (
        reduce
          (fn* (memo x) (cons (f x) memo))
          '()
          xs))))

  (def! every? (
    fn* (pred xs) (
      if (empty? xs)
        true
        (if (pred (car xs)) (every? pred (cdr xs)) false))))

  (def! some? (
    fn* (pred xs) (
      if (empty? xs)
        false
        (if (pred (car xs)) true (some? pred (cdr xs))))))

  (def! letmemrec* (
    macro* (alias expr)
      `(let* (
        ~(car alias)
        (memfix* (fn* (~(car alias)) ~(_1 alias))))
          ~expr)))

  (def! skip (
    fn* (nbr xs) (
      letrec* (
        -skip-
        (fn* (ys) (
          let* (nbr (car ys), xs (_1 ys)) (
            cond
              (= 0 nbr) xs
              (= 1 nbr) (cdr xs)
              "default" (-skip- (list (decr nbr) (cdr xs))))))) (
          -skip- (list nbr xs)))))

  (def! invokable? (fn* (x) (or (function? x) (macro? x))))

  (def! . (
    macro* (x key & xs) (
      if (empty? xs)
        `(get ~x ~key)
        `((get ~x ~key) ~@xs))))

  (def! .. (
    fn* (lo hi) (
      letrec* (
        -..-
        (fn* (xs) (
          let* (lo (_0 xs), hi (_1 xs), -list- (_2 xs)) (
            if (= lo hi)
              (cons hi -list-)
              (-..- (list lo (decr hi) (cons hi -list-))))))) (
          -..- (list lo hi '())))))

  (def! defrec! (
    macro* (fn-name fn-body)
      `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))

  (def! for* (
    macro* (loop-parameters body)
      `(loop
         ~(_0 loop-parameters)
         (if ~(_1 loop-parameters)
           (do ~body (loop ~(_2 loop-parameters)))
           nil))))

  (def! for-each (
    fn* (f xs) (
      reduce (fn* (memo x) (do (f x) memo)) nil xs)))

  (def! n-times (
    fn* (n f) (
      loop
        (i 0)
        (if (= i n)
          nil
          (do (f i) (loop (+ i 1)))))))

  (def! tap (fn* (f x) (do (f x) x)))

  (def! with-side-effect (fn* (thunk x) (do (thunk) x)))

  (def! thunk (macro* (form) `(fn* () ~form)))

  (def! call (macro* (f & xs) `(~f ~@xs)))

  (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))

  (def! eval-string (fn* (erlString) (eval (parse erlString))))
)
