(do
  (def! help (fn* () (pretty-print (
    string
    "  This is a terminal emulator running a lisp interpreter."
    "\n"
    "\n  Press <tab> for completion of keywords and defined identifers."
    "\n  Press <Ctrl-a> to move the cursor to the begining of the line."
    "\n  Press <Ctrl-e> to move the cursor to the end of the line."
    "\n  Press <Ctrl-h> to delete the character preceding the cursor."
    "\n  Press <Ctrl-l> to clear the console."
    "\n  Press <Ctrl-u> to clear the portion of the line preceding the cursor."
    "\n"
    "\n  Execute `(keys (-get-current-env-))` to see a list of available, defined identifiers."
    "\n  Execute `(example-1)` and `(example-2)` to see introductory examples."))))

  (def! example-1 (fn* () (do
    (def! time! (fn* (form) (
      let* (start (time-ms)) (
        let* (result (eval form))
          { :result result, :time (- (time-ms) start) }))))
    (def! fib (fix* (fn* (k) (
      fn* (n) (
        cond
          (= n 0) 1
          (= n 1) 1
          :else (+ (k (- n 2)) (k (- n 1))))))))
    (def! memfib (memfix* (fn* (k) (
      fn* (n) (
        cond
          (= n 0) 1
          (= n 1) 1
          :else (+ (k (- n 2)) (k (- n 1))))))))
    (pretty-print (
      string
        "; `time!`, a simple profiling function"
        "\n(def! time! (fn* (form) ("
        "\n  let* (start (time-ms)) ("
        "\n    let* (result (eval form))"
        "\n      { :result result, :time (- (time-ms) start) }))))"
        "\n"
        "\n; `fib`, a function that recursively determines the nth Fibonacci number"
        "\n(def! fib (fix* (fn* (k) ("
        "\n  fn* (n) ("
        "\n    cond"
        "\n      (= n 0) 1"
        "\n      (= n 1) 1"
        "\n      :else (+ (k (- n 2)) (k (- n 1))))))))"
        "\n"
        "\n; `memfib`, a memoized function that determines the nth Fibonacci number"
        "\n(def! memfib (memfix* (fn* (k) ("
        "\n  fn* (n) ("
        "\n    cond"
        "\n      (= n 0) 1"
        "\n      (= n 1) 1"
        "\n      :else (+ (k (- n 2)) (k (- n 1))))))))"
        "\n"
        "\n(time! '(map fib (.. 0 15)))"
        "\n(time! '(map memfib (.. 0 15)))")))))

  (def! example-2 (fn* () (do
    (def! _0 (with-meta (\ f x x) 0))
    (def! _1 (with-meta (\ f x (f x)) 1))
    (def! _2 (with-meta (\ f x (f (f x))) 2))
    (def! times10 (fn* (n) (* n 10)))
    (def! succ (fn* (n) (
      with-meta 
        (\ f x (f ((n f) x)))
        (+ (meta n) 1))))
    (def! pred (fn* (n) (
      with-meta
        (\ f x (((n (\ g h (h (g f)))) (\ u x)) (\ u u)))
        (- (meta n) 1))))
    (def! _4 (succ (succ _2)))
    (def! _3 (pred _4))
    (pretty-print (
      string
        "; Church numbers"
        "\n(def! _0 (with-meta (\ f x x) 0))"
        "\n(def! _1 (with-meta (\ f x (f x)) 1))"
        "\n(def! _2 (with-meta (\ f x (f (f x))) 2))"
        "\n"
        "\n(meta _0)"
        "\n(meta _1)"
        "\n(meta _2)"
        "\n"
        "\n; `times10`, a simple function to test the above Church numbers"
        "\n(def! times10 (fn* (n) (* n 10)))"
        "\n"
        "\n((_0 times10) 1)"
        "\n((_1 times10) 1)"
        "\n((_2 times10) 1)"
        "\n"
        "\n; successor function"
        "\n(def! succ (fn* (n) ("
        "\n  with-meta "
        "\n    (\ f x (f ((n f) x)))"
        "\n    (+ (meta n) 1))))"
        "\n"
        "\n; predecessor function"
        "\n(def! pred (fn* (n) ("
        "\n  with-meta"
        "\n    (\ f x (((n (\ g h (h (g f)))) (\ u x)) (\ u u)))"
        "\n    (- (meta n) 1))))"
        "\n"
        "\n(def! _4 (succ (succ _2)))"
        "\n(meta _4)"
        "\n((_4 times10) 1)"
        "\n"
        "\n(def! _3 (pred _4))"
        "\n(meta _3)"
        "\n((_3 times10) 1)")))))
)
