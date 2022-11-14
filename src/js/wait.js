export const wait = (time = 0) =>
  new Promise((resolve) => window.setTimeout(() => resolve(), time));
