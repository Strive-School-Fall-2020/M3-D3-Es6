// ----------- SHORTHAND SYNTAX

// function createPerson(name, age) {
//   // OLD WAY
//   return {
//     name: name,
//     age: age,
//   };
// }

// function createPerson(name, age) {
//   // NEW WAY
//   return {
//     name,
//     age,
//   };
// }

// ----------- DESTRUCTURING - OBJECT

// const myObject = {
//   type: "asd",
//   name: "whatever",
// };

// // NEW WAY
// const { type, name, value = 10 } = myObject;

// // OLD WAY
// const type = myObject.type;
// const name = myObject.name;
// const value = myObject.value ? myObject.value : 10; // myObject.value does not exists

// ----------- DESTRUCTURING - ARRAY

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor] = colors;

// const [, , thirdColor, fourthColor = "yellow"] = colors;
// console.log(firstColor); // "red"
// console.log(secondColor); // "green"
// console.log(thirdColor); // "blue"
// console.log(fourthColor); // "yellow"

// ----------- REST ITEMS

// const colors = ["red", "green", "blue"];

// const [firstColor, ...otherColors] = colors;

// console.log(firstColor); // "red"
// console.log(otherColors[0]); // "green"
// console.log(otherColors[1]); // "blue"

// ------------ DESTRUCTURING FUNCTION PARAMETERS

// function setCookie(name, value, { secure, path, domain }) {
//   console.log(secure)
//   console.log(path)
// }

// setCookie("name", "value", {
//   secure: true,
//   path: "asdasdasd",
//   domain: "asdasdasd",
// })
