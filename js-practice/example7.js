function frequencyAppear(arr) {
  return arr.reduce((result, element) => {
    if (result.hasOwnProperty(element)) {
      result[element]++;
    } else {
      result[element] = 1;
    }
    return result;
  }, {});
}
console.log(frequencyAppear(["a", "b", "c", "a", "c", "z"]));
