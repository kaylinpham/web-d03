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

});
