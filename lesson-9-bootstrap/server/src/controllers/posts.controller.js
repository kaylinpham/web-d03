const posts = [
  {
    id: "1",
    title: "Quốc hội có ba Phó chủ tịch mới",
    content:
      "Các đại biểu thông qua nghị quyết bầu các ông Trần Thanh Mẫn, Nguyễn Khắc Định và Nguyễn Đức Hải làm Phó chủ tịch Quốc hội với tỷ lệ tán thành 94,79%.",
    author: "Hoàng Thùy",
    time: new Date(2021, 3, 1),
    comments: [{ author: "Giang", comment: "Good" }],
  },
  {
    id: "2",
    title: "Hôm nay trình miễn nhiệm Thủ tướng Nguyễn Xuân Phúc",
    content:
      "Chủ tịch nước sẽ trình Quốc hội việc miễn nhiệm Thủ tướng Nguyễn Xuân Phúc trong phiên làm việc chiều nay 1/4.",
    author: "Hà Giang",
    time: new Date(2021, 3, 1),
    comments: [{ author: "Di", comment: "Bad" }],
  },
];

module.exports.getPosts = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Success",
    posts,
  });
};

module.exports.getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the post's id.",
    });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "Success",
    post,
  });
};

module.exports.addNewPost = (req, res) => {
  let id = Math.floor(Math.random() * 100);
  const { title, content, author } = req.body;
  const time = new Date();
  const comments = [];

  while (isExistId(id)) {
    id = Math.floor(Math.random() * 100);
  }

  posts.push({ id: String(id), title, content, author, time, comments });

  return res.status(200).json({
    isSuccess: true,
    message: "Success add new post.",
    posts,
  });
};

module.exports.updatePostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the post's id.",
    });
  }

  Object.assign(post, req.body);
  post.time = new Date();

  return res.status(200).json({
    isSuccess: true,
    message: "Success update item.",
    posts,
  });
};

module.exports.deletePostById = (req, res) => {
  const { id } = req.params;
  let index = -1;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      index = i;
    }
  }

  if (index === -1) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the post's id.",
    });
  }

  posts.splice(index, 1);

  return res.status(200).json({
    isSuccess: true,
    message: "Success delete.",
    posts,
  });
};
