const accounts = [
  { username: "phamhagiang", password: "123456Aa" },
  { username: "giang", password: "123456" },
];

module.exports.login = (req, res) => {
  const { username, password } = req.body;

  return isExistAccount({ username, password }, accounts)
    ? res.status(200).json({ isSuccess: true, message: "Success." })
    : res.status(400).json({ isSuccess: false, message: "Invalid account." });
};

function isExistAccount(obj, arr) {
  for (x of arr) {
    if (JSON.stringify(x) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}
