//String
let myName: string = "Max";
//myname = 28 Error

//Number
let myAge: number = 27;
//myAge = "max" Error

//boolean
let hasHobbies: boolean = false;
hasHobbies = true;
console.log(hasHobbies);

//assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = "string"; false
console.log(myRealAge);

// arrays
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [122];
console.log(hobbies);

//tuples
let address: [string, number] = ["Superstreet", 22];
console.log(address);

//enum
enum Color {
  Gray, //0
  Green = 100, // 1
  Blue, // 2
}
let myColor: Color = Color.Green;
console.log(myColor);

//Type any
let car: any = "BMW";
car = { brand: "BMW", series: 3 };

//Using Types in functions

function returnMyName(): string {
  return myName;
}
console.log(returnMyName());
//void
const sayHi = (): void => {
  console.log("What!");
};
sayHi();
// in arguments

function multiply(value1: number, value2: number) {
  return value1 * value2;
}
console.log(multiply(10, 10));

//function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;

//Objects
let userData: { name: string; age: number } = {
  name: "Max",
  age: 27,
};

//complex
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  },
};

let complex3: Complex = {
  data: [200, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  },
};

//union types
let myRealRealAge: number | string = 27;
console.log(myRealRealAge);

let finalResult = 20;
if (typeof finalResult === "number") {
  console.log("It's true");
}
