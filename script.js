"use strict";
//String
var myName = "Max";
//myname = 28 Error
//Number
var myAge = 27;
//myAge = "max" Error
//boolean
var hasHobbies = false;
hasHobbies = true;
console.log(hasHobbies);
//assign types
var myRealAge;
myRealAge = 27;
// myRealAge = "string"; false
console.log(myRealAge);
// arrays
var hobbies = ["Cooking", "Sports"];
hobbies = [122];
console.log(hobbies);
//tuples
var address = ["Superstreet", 22];
console.log(address);
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//Type any
var car = "BMW";
car = { brand: "BMW", series: 3 };
//Using Types in functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
var sayHi = function () {
    console.log("What!");
};
sayHi();
// in arguments
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 10));
//function types
var myMultiply;
myMultiply = multiply;
//Objects
var userData = {
    name: "Max",
    age: 27,
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
var complex3 = {
    data: [200, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
//union types
var myRealRealAge = 27;
console.log(myRealRealAge);
var finalResult = 20;
if (typeof finalResult === "number") {
    console.log("It's true");
}
