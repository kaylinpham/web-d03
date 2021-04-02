module.exports.randomName = (length) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

module.exports.isExistId = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return true;
    }
  }

  return false;
};
