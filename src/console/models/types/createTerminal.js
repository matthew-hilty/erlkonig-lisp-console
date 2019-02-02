export const createTerminal =  function (entries, prompts, currentPrompt) {
  return  {
    entries: entries,
    prompts: prompts,
    prompt: currentPrompt
  };
};
