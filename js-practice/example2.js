let a1 = 1;
let a3 = a1;
console.log(a1 === a3);
a3 = 3;
console.log(a1 === a3);

let obj1 = { a: 1 };
let obj3 = obj1;
console.log(obj1 === obj3);
obj3.a = 3;
console.log(obj1 === obj3);
