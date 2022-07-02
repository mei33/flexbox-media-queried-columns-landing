/**
 * @see https://css-tricks.com/snippets/javascript/random-hex-color/
 * */
export const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, "0");
