const users = [
  { id: "1", name: "Hieu" },
  { id: "69", name: "Quang" },
  { id: "1000", name: "Khai" },
  { id: "4", name: "Tien" },
];

module.exports.getUsers = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Success",
    users,
  });
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the user's id.",
    });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "Success",
    user,
  });
};

module.exports.deleteUserById = (req, res) => {
  const { id } = req.params;
  let index = -1;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      index = i;
    }
  }

  if (index === -1) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the user's id.",
    });
  }

  users.splice(index, 1);

  return res.status(200).json({
    isSuccess: true,
    message: "Success delete.",
    users,
  });
};

module.exports.addNewUser = (req, res) => {
  let id = Math.floor(Math.random() * 100);
  const { name } = req.body;

  while (isExistId(id)) {
    id = Math.floor(Math.random() * 100);
  }

  users.push({ id: String(id), name });

  return res.status(200).json({
    isSuccess: true,
    message: "Success add new item.",
    users,
  });
};

module.exports.updateUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the user's id.",
    });
  }

  user.name = randomName(5);

  return res.status(200).json({
    isSuccess: true,
    message: "Success update item.",
    users,
  });
};

function randomName(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function isExistId(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return true;
    }
  }

  return false;
}
