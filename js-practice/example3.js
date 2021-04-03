var user = {
  name: "Hieu",
  age: 18,
  appearance: {
    hairColor: "black",
    skinColor: "yellow",
    height: 170,
    weight: 68,
  },
};
function getKeys(obj, arr = []) {
  let keys = arr;
  if (typeof obj === "object") {
    for (let key in obj) {
      arr.push(key);
      if (typeof obj[key] === "object") {
        getKeys(obj[key], keys);
      }
    }
  }
  return keys;
}
