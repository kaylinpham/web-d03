function same(arr1, arr2) {
  const frequency1 = arr1.reduce(countFrequency, {});
  const frequency2 = arr2.reduce(countFrequency, {});
  for (let key in frequency1) {
    if (
      !frequency2.hasOwnProperty(key * key) ||
      frequency2[key * key] !== frequency1[key]
    ) {
      return false;
    }
  }
  return true;
}
const countFrequency = (obj, n) => {
  if (obj.hasOwnProperty(n)) {
    obj[n]++;
  } else {
    obj[n] = 1;
  }
  return obj;
};
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 1], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
