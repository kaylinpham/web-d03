$(document).ready(() => {
  validateInput("#fullname");
  validateInput("#email");
});

function validateInput(id) {
  let element = $(id);
  element.keyup(() => {
    if (element.value === "") {
      element.css("borderColor", "red");
    }
  });
}
