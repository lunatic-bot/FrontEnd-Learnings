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
console.log(a)
a = 7; //assignment
b = a;

console.log(a)

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
console.log(sum)

var diff = 20 - 10;
console.log(diff)

var prod = 8 * 10;
console.log(prod)

var quo = 355/10;
console.log(quo)

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
console.log(rem)

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
console.log(myStr1)

// length of string - 
var myStr1 = "I am a double quoted string ";
console.log(myStr1.length)

// bracket notation - 
var myStr1 = "I am a double quoted string ";
console.log(myStr1[0])

// strings are immutable
var myStr1 = "Jello World";
// myStr1[0] = "H"; - will not work
// console.log()

// game - 
function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";

    // result = 

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
