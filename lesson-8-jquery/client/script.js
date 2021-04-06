// const { json } = require("body-parser");

$(document).ready(function () {
  //GET
  $("#show-text-btn").click(() => {
    alert($("#text").text());
  });
  $("#show-html-btn").click(() => {
    alert($("#text").html());
  });
  $("#show-value-btn").click(() => {
    alert($("#name-input").val());
  });
  $("#show-attribute-btn").click(() => {
    alert($("#text").attr("style"));
  });

  //SET
  $("#set-text-btn").click(() => {
    $("#text").text("Haha");
  });
  $("#set-html-btn").click(() => {
    $("#text").html("123");
  });
  $("#set-value-btn").click(() => {
    $("#name-input").val("Username input value");
  });
  $("#set-attribute-btn").click(() => {
    $("#text").attr("style", "background-color:green");
  });

  //ADD
  $("#add-append-btn").click(() => {
    $("#add__test").append("<span>append nek</span>");
  });
  $("#add-prepend-btn").click(() => {
    $("#add__test").prepend("<span>prepend nek</span>");
  });
  $("#add-after-btn").click(() => {
    $("#add__test").after("<span>after nek</span>");
  });
  $("#add-before-btn").click(() => {
    $("#add__test").before("<span>before nek</span>");
  });

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
