console.log('Hello World');

//Variables in JavaScript
//By default, uninitialized variables are undefined in JavaScript.
let num = 2;//declaring a variable called x and setting the value of this variable to 2
console.log(num);

let name = 'Baris'; //declaring a variable called name and setting the value of this variable to 'Baris'
console.log(name);

//Identifier names should be meaningful
//Identifier names cannot start with a number
//Identifier names cannot contain a space or hyphen (-)
//Identifier names are case-sensitive

let firstName = 'Baris';
let lastName = 'Kaplan';

//Constants

//Constant
const interest = 0.75;
console.log(interest);
//interest = 0.8; //this line throws an error because interest is declared as a constant. This means that the value of interest cannot be changed.
//console.log(interest);


//Variable
let interestRate = 0.5; //let the value of interest rate be 0.5
interestRate = 1.3; //change the value of the interest rate to 1.3
console.log(interestRate); //log the interest rate


//Primitive / Value Types: String, Number, Boolean, undefined, null
//String 
let myName = 'Baris' //String literal

console.log(typeof(myName)); //typeof function will return the type of the variable which is passed inside the typeof function.

myName = 33;
console.log(typeof(myName));

//Number
let myAge = 22; //Number literal
//Boolean
let isApproved = false; //Boolean Literal
//undefined
let hack = undefined;
//null
let selectedMovie = null; 

//Dynamic Typing:In the dynamically typed languages, once the value of a variable is set,
//this value can be changed later. (such as Javascript)

//Static Typing: In the statically typed languages, once the value of a variable is set,
//this value cannot be changed later.


console.log(typeof(selectedMovie)); //type of the selectedMovie which is set to null at the beginning is object.


//Reference Types in Javascript:
//Objects, Arrays, Functions

//declaring a Student object:
let student = {
        name: 'John',
        age: '20'
};

//accessing the fields of an object
//Dot Notation
console.log(student);
console.log(student.age);
console.log(student.name);
student.name = 'Mike';
console.log(student.name);

//Bracket Notation
let selection = 'name';
student[selection] = 'Mary';
console.log(student.name);


let selectedColors = ['red','green','blue']; //declaring an array named as selectedColors
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);

selectedColors[3] = 'yellow'; 
console.log(selectedColors); //In Javascript, lengths of the arrays are dynamic. It can change.


selectedColors[4] = 555;
console.log(selectedColors); //In Javascipt, the type of the variables included in the array can differ. Meaning that we can both have strings and integers in an array.

console.log(selectedColors);


console.log(selectedColors.length); //length function returns the number of elements in an array

//Functions 

function greetings() { // a function without parameters
    console.log('Hello World !');
}

greetings();


function greetingsVersion2(name) { //here, name is a parameter of the greetingsVersion2 function
    console.log('Hello '+name);
}

//here, 'Baris' is an argument. 
greetingsVersion2('Baris');


greetingsVersion2('Mike')

//this function performs a task.
function greetingsVersion3(name,lastName) {
    console.log('Hello '+name+ ' ' + lastName);
}

greetingsVersion3('Jane');//2nd parameter will be undefined for this call
greetingsVersion3('Joe'); //2nd parameter will be undefined for this call
greetingsVersion3('Joe','Smith'); //it will log Hello Joe Smith
greetingsVersion3('Mary');//2nd parameter will be undefined for this call


//this function calculates a value 
function squareNum(num) {
    return num*num;
}

let number = squareNum(9);
console.log(number);

console.log(squareNum(8));


















