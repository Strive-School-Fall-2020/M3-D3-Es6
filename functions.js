// ----------- FUNCTIONS - DEFAULT PARAMTERS

// function myFunc(url='myUrl', time= 10){

// }

// myFunc('http://whatever.com') // time will be 10

// myFunc('http://whatever.com', 20) // time will be 20

// // pre es6

// function myFuncPreES6(url, time) {
//     if(time===undefined) time= 10
// }

// ----------- FUNCTIONS - REST PARAMETERS

// function withRestParams(...rest) {
//   // rest is an array of all the parameters
//   let sum = 0

//   rest.forEach((currentElement) => (sum = sum + currentElement))

//   //   rest.forEach(function (currentElement) {
//   //     return (sum = sum + currentElement)
//   //   })

//   return sum
// }

// console.log(withRestParams(1))

// console.log(withRestParams(1, 2))

// console.log(withRestParams(1, 2, 3, 4, 5, 6, 7, 8, 9))

// ----------- FUNCTIONS - ARROW FUNCTIONS

// () => {};

// function whatever() {
//   console.log(this);
// }

// whatever();

// const arrow = () => {
//   console.log(this);
// };

// arrow();

// const button = document.querySelector();
// button.addEventListener("click", function () {
//   console.log(this); // button
//   this.classList.toggle("on");
// });

// const button = document.querySelector();

// console.log(this); // Window

// button.addEventListener("click", () => {
//   console.log(this); // Window
//   this.classList.toggle("on"); // WILL NOT BE WORKING
// });
