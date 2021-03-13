function sumZero(arr) {
  let j = arr.length - 1;
  for (let i = 0; i < j; i++) {
    if (arr[i] * arr[j] >= 0) {
      return undefined;
    } else {
      if (Math.abs(arr[i]) < arr[j]) {
        j--;
        i--;
      } else if (Math.abs(arr[i]) === arr[j]) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-5, -2, 0, 1, 2, 3, 4]));
