
export const parseWords = (text) => text
  .split("\n")
  .filter(word => word.startsWith("* "))
  .map(word => word.slice(2));

export const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];
