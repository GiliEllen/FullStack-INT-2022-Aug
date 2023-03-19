// const data = require("./people");
const { people, ages, random } = require("./people");
const os = require("os")
// import {people, ages, random} from "./people"

// console.log(data);

const number1 = random();

const greet = (name) => {
  console.log(`hello ${number1}`);
};

// console.log(global)

// const int = setInterval(() => {
//   console.log('this is in the intrval')
// }, 1000)

// setTimeout(() => {
//   console.log('in the timeout')
//   clearInterval(int)
// }, 3000);

// console.log(__filename);
// console.log(__dirname);

console.log(os.machine())

// greet("gili");
// greet('ziv')
// greet('lidor')
