export default (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (Math.round(rand) === -0) {
    return 0;
  }
  return Math.round(rand);
};
