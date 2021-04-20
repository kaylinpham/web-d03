// const { json } = require("body-parser");

$(document).ready(function () {
  //LOGIN
  const login = () => {
    const request = new XMLHttpRequest();

    const requestData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    request.onload = () => {
      const res = JSON.parse(request.responseText);

      $("#login__response").text(
        res["isSuccess"] === true
          ? "Đăng nhập thành công."
          : "Đăng nhập thất bại."
      );
    };

    request.open("post", "http://localhost:8080/login/");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(requestData));
  };
  $("#login__btn").click(() => login());

  //GET USERS
  const getUsers = () => {
    const request = new XMLHttpRequest();

    request.onload = () => {
      const res = JSON.parse(request.responseText);
      const users = [...res["users"]];
      let html = "";

      users.map(
        (user) => (html += `<li>ID: ${user.id} - Name: ${user.name}</li>`)
      );

      $("#users__list").html(html);
    };

    request.open("get", "http://localhost:8080/users/");
    request.send();
  };
  $("#users__btn").click(() => getUsers());
});
