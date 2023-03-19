// const data = require("./people");

const {people, ages, random} = require("./people");

// console.log(data);

const number1 = random();

const greet = (name) => {
  console.log(`hello ${number1}`);
};

greet("gili");
// greet('ziv')
// greet('lidor')
