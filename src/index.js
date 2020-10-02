
exports.min = function min (array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
      if (min > array[i]) min = array[i];
  }
  return min;
};
console.log (min);

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
