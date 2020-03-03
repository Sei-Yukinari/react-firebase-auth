export const renderUpdateMessage = (message: string) => {
  return message
    .replace(/^\[ERROR\] .+$/gm, x => `<span style="color: red;">${x}</span>`)
    .replace(/\n/g, '<br>');
};
