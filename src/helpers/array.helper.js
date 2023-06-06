const averageFunction = array => {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  return average;
};
export {averageFunction};
