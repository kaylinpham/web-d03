console.log(a);
var a = "hoisting";

saySomething("Hello");
function saySomething(a) {
  console.log(a);
}
doSomething();
function doSomething() {
  console.log(a);
  var a = "Fly";
}
