//es6

// Destructuring
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2); // hobby1 -> Cooking , hobby2 -> Sports

const userData = {
  userName: "max",
  age: 29,
};
const { userName, age } = userData;
console.log(userName, age);
