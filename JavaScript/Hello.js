//  defining a variable -
var number = 5;
// in line comment
/*
Multi line comment
commented
this also
*/

// Data types - 
// undefined, null, boolean, string, symbol, number and object

// defining a variable - 
// 1. using var - used throughout the whole program
var myName = "Beau"
myName = 8
// 2. using let - within the scope
let ourName = "OurNameTogether"
// 3. const - can't be changed
const pi = 3.14 

// declaration vs assignment -
var a; //declaration
var b = 2;
// console.log(a)
a = 7; //assignment
b = a;

// console.log(a)

// Initializing a variable at declaraion - 
var a = 9;
// Uninitialized
var a;
var b;


// Variable and function name is case sensitive - 
var StUdLyCapVar;

// assignments
// STUDLYCAPVAR = 10; this is different than previous declaration
//  You can use camel case for variables and function names


// adding two numbers - 
var sum = 10 + 10;
// console.log(sum)

var diff = 20 - 10;
// console.log(diff)

var prod = 8 * 10;
// console.log(prod)

var quo = 355/10;
// console.log(quo)

// increment -
var myVar = 11;

myVar = myVar + 1;
// or - 
myVar++;


// decrement -
var myVar = 11;

myVar = myVar - 1;
// or - 
myVar--;

// decimals - 
var ourDecimal = 5.89;
var prod = 2.0 * 2.5;
var quo = 4.4/2.0;
// reminder operator - 
var rem = 11%3;
// console.log(rem)

a = a + 12;
// is same as, works in similar way for subtraction
a += 12;

// compound- 
a = a * 3; 
a *= 3; 
// dividing- 
a = a/12;
a /= 12;

// Declare string Variables - 
var firstName = "Atal";
var secondName = "Bajpai";

// escaping literal quotes from string - 
// var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr)

// quoting in single quote -
// var myStr = 'I am a "double quoted" string inside "double quotes"';
// console.log(myStr)

// escape sequence in string - 
/*
CODE    OUTPUT
\'	    Single quote
\"	    Double quote
\\	    Backslash
\n      new line
\r      carrige return
\t      tab
\b      backspace
\f      form feed

*/
// var myStr = "I am a double\n\t\\ quoted string inside\n double quotes";
// console.log(myStr)


// concatenation - 
// var myStr = "I am a double quoted string " + "inside double quotes";
// console.log(myStr)

// var myStr1 = "I am a double quoted string ";
// myStr1 += "inside double quotes";
// console.log(myStr)

// strings with variables - 
// var myStr2 = "Atal Bajpai";
// var myStr = "I am a double quoted string " + myStr2 + " inside double quotes";
// console.log(myStr)


// append variables - 
var myStr1 = "I am a double quoted string ";
var myStr2 = "inside double quotes";
myStr1 += myStr2
// console.log(myStr1)

// length of string - 
var myStr1 = "I am a double quoted string ";
// console.log(myStr1.length)

// bracket notation - 
// var myStr1 = "I am a double quoted string ";
// console.log(myStr1[0])

// strings are immutable
var myStr1 = "Jello World";
// myStr1[0] = "H"; - will not work
// console.log()

// game - 
// function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
//     var result = "";

//     result += "The" + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

//     return result;
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));



// arrays - 
var ourArray = ["Jhon", 23];

// nested array - 
var ourArray = [["Jhon", 23], ["Missy", 21]];

// access array using index - 
var ourArray = [20, 23, 30];
var data = ourArray[0];

// can also modify array data using indexing (arrays are mutable)
// same way indexing and modification work for 2D arrays

// push() function - append data to the end of array
// var ourArray = [20, 23, 30];
// ourArray.push(50);
// console.log(ourArray);


// pop() function - remove data to the end of array
// var ourArray = [20, 23, 30, 50];
// var vb = ourArray.pop();
// console.log(vb);

// shift() function - remove data from the beginning of the array 
// var ourArray = [20, 23, 30, 50];
// var vb = ourArray.shift();
// console.log(vb);

// unshift() function - add data to the beginning of the array 
// var ourArray = [20, 23, 30, 50];
// ourArray.unshift(100);
// console.log(ourArray);



// functions - definition 
// function ourReusableFunction() {
//     console.log("Hello world!");
// }

// // calling function
// ourReusableFunction();
// ourReusableFunction();

// parameters
// function ourReusableFunction(a, b) {
//     console.log(a - b);
// }

// // calling function
// ourReusableFunction(20, 10);
// ourReusableFunction(100, 50);


// scopes - 
// var myGlobal = 10; // outside the function
// function func1() {
//     // if we do not put var keyword it will be global by default
//     oopsGlobal = 5;
// }

// function func2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output)
// }

// func1();
// func2();

// function myLocalScope() {
//     var myVar0 = 5;
//     console.log(myVar0);
// }
// myLocalScope();
// console.log(myVar0); -  not defined

// local variable gets the precedence over the global variable


// function nextInLine(arr, item){
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];
// console.log("Before : " + JSON.stringify(testArr))
// console.log(nextInLine(testArr, 6))
// console.log("after : " + JSON.stringify(testArr))


// boolean
// function boolean(){
//     return true;
// }

// if - 
function TorF(isItTrue){
    if (isItTrue){
        return "yes, it is true";
    }
    return "No, it's false";
}
// console.log(TorF(true));

// comparison -> '==' - Number and strings are equal here!
// assignment -> '='
// not equal -> '!=' - Number and strings are equal here!

// strict equality operator -> '===', Number and strings are not equal here!
// 3===3; //true
// 3==='3'; - false

// strict inequality operator -> '!==', Number and strings are not equal here!
// 3!==3; //false
// 3!=='3'; - true

// && - AND operator
// || - OR operator


// else if - 
function TestElseIf(val){
    if (val > 10){
        return "grater than 10";
    } else if(val < 5){
        return "less than 5";
    }else{
        return "Between 5 and 10";
    }
}

// switch statements - 
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        
        // default, if any of the cases does not match
        default:
            answer = "Out of scope";
            break;
    }
    return answer;
}

// console.log(caseInSwitch(2));

// grouping cases - 
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
// console.log(sequentialSizes(5));


// Javascript Objects - 
var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything"]
};

var myDog = {
    "name" : "Quincy",
    "legs" : 3,
    "tails" : 2,
    "friends" : []
};

// access object values - 
var nameValue = ourDog.name;
//  or(required when property has spaces)
var nameValue = ourDog["name"];

// updating object properties
ourDog.name = "Happy Camper";
ourDog["name"] = "Happy Camper";
ourDog.bark = "bow-bow";

// console.log(ourDog)
// delete a property
delete ourDog.bark

// check if object has a property
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}
function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}

// console.log(checkObj("hello"));

// nested objetcs - 
var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBox = myStorage.car.inside["glove box"]
// console.log(gloveBox)


// Loops - 
var  myArr = [];
var i = 0;
while(i<5) {
    myArr.push(i);
    i ++;
}
// console.log(myArr);

// for loop-  
var  myArr = [];
for (var i = 1; i < 6; i++) {
    myArr.push(i);
}
// console.log(myArr);

// iterate through array - 
var  myArr = [1, 2, 3, 4, 5, 6, 7, 8];
var ourTotal = 0;
for (var i = 1; i < myArr.length; i++){
    ourTotal += myArr[i]
} 
// console.log(ourTotal);

//  do while loop - 
var  myArr = [];
var i = 10;
do {
    myArr.push(i);
    i ++;
} while(i<5)
// console.log(i, myArr)

// generate random Fractions - 
function randomFraction() {
    return Math.random();
}
// console.log(randomFraction());

// random whole number
var rnadomNumber = Math.floor(Math.random() * 20);
function randomWhole() {
    return Math.floor(Math.random() * 10);
}
// console.log(randomWhole());

// random in range - 
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(randomInRange(10, 20));


// parseInt - string to integer
var convertedInt = parseInt("36");
// console.log(convertedInt);

// with redex
var convertedInt = parseInt("1011001", 2);
// console.log(convertedInt);

// ternary operator - 
var a = 10;
var b = 20;
var checkEqual = a===b ? true : false;
// console.log(checkEqual)

// nested ternary operator
function checkSign(num) { 
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

// console.log(checkSign(-2));

// var, let and const to define a varaible - 
// with let, you can not declare the variable twice with let
var catName = "Quincy";
var quote;

var catName = "Beau"; // can do this


// let catName = "Quincy";
// let quote;

// let catName = "Beau"; // this will result in an error

function catTalk() {
    "use strict"; // enables strict mode to catch common coding mistakes

    catName = "Oliver";
    quote = catName + " says Meaw!";

}
// catTalk()


// let is only in block where it is defined, var is inside and outside of block
// function checkScope() {
//     "use_strict";
//     var i = "function scope";
//     if (true) {
//         var i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();

// function checkScope() {
//     "use_strict";
//     let i = "function scope";
//     if (true) {
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();

// function checkScope() {
//     "use_strict";
//     // let i = "function scope";
//     if (true) {
//         var i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();

// function checkScope() {
//     "use_strict";
//     // let i = "function scope";
//     if (true) {
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();



// const - read only, can not be reassigned.
// const city = "New York";
// city = "New Delhi"; // gets error - Uncaught TypeError: Assignment to constant variable.


// but, the values of an array and object defined as const can be reassigned by bracket notation.
const arr = [2,5,7];
// arr = [5,7,2]; //Uncaught TypeError: Assignment to constant variable.
// but we can do this - 
arr[0] = 5;
arr[1] = 7;
arr[2] = 2;


// object freeze to make objects unmutable - 
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99; //TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    } catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS
}

const PI = freezeObj();
// console.log(PI)


// Annonymous function - 
// var magic = function () {
//     return new Date();
// };

// arrow function - 
// var magic = () => {
//     return new Date();
// };

// const magic = () => new Date();

// fucntion - 
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
// console.log(myConcat([1,2], [3,4,5]));

// above function can be converted to arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1,2], [3,4,5]));

// filter and map  with arrow fucntion - 
var array = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const sqaurelist = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = sqaurelist(array);
// console.log(squaredIntegers)


// rest operator to get multiple arguments
const sumCheck = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sumCheck(1,2,3,4,5));


// spread operator - 
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"]
let arr2;
(function(){
    // arr2 = arr1;
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();

// console.log(arr2);


// Destructuring assignment - 
var voxel = {x: 3.6, y: 7.4, z: 6.54};

// var x = voxel.x;
// var z = voxel.y;
// var z = voxel.z;


// const {x: a, y: b, z: c} = voxel; // a=3.6, b = 7.4, c=6.54

// destructuring to get array elements in order - 
// const [z, x] = [1, 2, 3, 4, 5, 6];
// console.log(z,x);

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z,x, y);

// swap the values using destructuring
let one = 8, two = 6;
[one, two] = [two, one]
console.log(one, two);

// remove/assign first two from array using rest operator - 
const source = [1,2,3,4,5,6,7,8,9,10];
// const [ , , ...arr10] = source;
const [m,n, ...arr10] = source;
console.log(m, n, arr10); 



// template literal - 
const person = {
    name: "Zodiac hasbrow",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am $[person.age] years old.`;

console.log(greeting);


// object literal - 
// const createPerson = (name, age, gender) => {
//     return {
//         name : name,
//         age: age,
//         gender: gender
//     };
// };
// console.log(createPerson("Zodiac Hasbrow", 56, "male"))
// this could be done as 
const createPerson = (name, age, gender) => ({ name, age, gender });
// console.log(createPerson("Zodiac Hasbrow", 56, "male"))

// functions inside object



// import and export
// import { capitalizeString } from "./string_functions.js";
// const cap = capitalizeString("Hello from atalbajpai");
// console.log(cap)

// import everyting from file - 
import * as capitalizeString from "./string_functions.js";


// import a default export - 
import subtract from "./string_functions.js";
subtract(7, 4);








































































