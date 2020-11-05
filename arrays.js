// ------------------- MAP FILTER REDUCE -----------------------------

// const myAwesomeArray = [1, 2, 3, 4, 5, 6]

// MAP

// const squaresArray = myAwesomeArray.map((element) => element * element)

// console.log(squaresArray)

// const students = [
//     {
//       id: 1,
//       name: "Roberto",
//       codingExperience: 12,
//       section: "G1",
//       homeworkScore: 1231,
//       hackerRankScore: 12312,
//     },
//     {
//       id: 2,
//       name: "Ermal",
//       codingExperience: 110,
//       section: "G2",
//       homeworkScore: 1231,
//       hackerRankScore: 12312,
//     },
//     {
//       id: 3,
//       name: "Evgeni",
//       codingExperience: 20,
//       section: "G1",
//       homeworkScore: 23,
//       hackerRankScore: 123123,
//     },
//     {
//       id: 4,
//       name: "Lidia",
//       codingExperience: 5,
//       section: "G2",
//       homeworkScore: 3434232,
//       hackerRankScore: 434,
//     },
//     {
//       id: 4,
//       name: "Lidia",
//       codingExperience: 5,
//       section: "G2",
//       homeworkScore: 3434232,
//       hackerRankScore: 434,
//     },
//   ]

// MAP
// const studentsIds = students.map((student, index, array) => student.id)
// console.log(studentsIds)

// FILTER

// const g2Students = students
//   .filter((student) => student.section === "G2")
//   .map((student) => student.name)

// const g1Students = students
//   .filter((student) => student.section === "G1")
//   .map((student) => student.name)

// console.log(g2Students)
// console.log(g1Students)

// REDUCE

// const total = squaresArray.reduce(
//   (accumulator, element) => accumulator * element,
//   1
// )

// console.log(total)

// FILTER + MAP + REDUCE

// with normal functions

// const section2TotalScore = students
//   .filter(function (student) {
//     return student.section === "G2"
//   })
//   .map(function (student) {
//     return student.homeworkScore + student.hackerRankScore
//   })
//   .reduce(function (total, score) {
//     return total + score
//   }, 0)

// console.log(section2TotalScore)

// with arrow functions <3

// const section2TotalScore = students
//   .filter((student) => student.section === "G2")
//   .map((student) => student.homeworkScore + student.hackerRankScore)
//   .reduce((total, score) => total + score, 0)

// console.log(section2TotalScore)

// ------------------- VERY VERY USEFUL ARRAY METHODS -----------------------------

// 1.SOME
// const myAwesomeArray = ["a", "b", "c", "d", "b"];

// console.log(myAwesomeArray.some((element) => element === "a"));

// 2.EVERY

// console.log(myAwesomeArray.every((element) => element === "a"));

// 3. FLAT

// const myAwesomeArray = [[1, 2], [3, 4], 5]

// myAwesomeArray.flat()

// 4.FOREACH

// myAwesomeArray.forEach((element) => console.log(element));

// const cars = [];

// cars.forEach((car) => console.log(car));

// 5.FINDINDEX & FIND

// const numbers = [24, 41, 23, 16, 59];

// console.log(
//   "find output:",
//   numbers.find((number) => number > 30)
// );
// console.log(
//   "findIndex output: ",
//   numbers.findIndex((number) => number > 30)
// );

// 7. FILL

// const numbers = [1, 2, 3, 4]
// // numbers.fill(1)
// // console.log(numbers)

// numbers.fill(1, 2)
// console.log(numbers)
// numbers.fill(0, 1, 3)
// console.log(numbers)

// 8. INCLUDES

// const myAwesomeArray = [1, 2, 3, 4, 5]

// myAwesomeArray.includes(3)

// myAwesomeArray.includes(8)
