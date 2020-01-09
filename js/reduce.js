function reduce(arr, callback, initial) {
  let i = 0;
  let acc = initial === undefined ? arr[i++] : initial;
  for (; i < arr.length; i++) {
      acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}