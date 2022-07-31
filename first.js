var aBC;
var properCamelCase;
var TitleCaseOver;


aBC = 10;
properCamelCase = "A String";
TitleCaseOver = 9990;

console.log(aBC);
console.log(properCamelCase);
console.log(TitleCaseOver);


//Basic Math


var addition = 10 + 10;
console.log(addition);

var subtraction = 40-13;
console.log(subtraction);

var product = 8 * 10;
console.log(product);

var division = 66/33;
console.log(division);


var myVariable = 999;
myVariable ++; //shorthand way of variable incrementation in javascript
console.log(myVariable);
myVariable = myVariable + 1;
console.log(myVariable);


var myVar = 11;
myVar--;
console.log(myVar);//shorthand way of variable decrementation in javascript
myVar = myVar - 1;
console.log(myVar);


var myDecimal = 9.6666;
var myDec = 0.00000999885;


//Multiply Decimals:
var prodDecimals = 2.34*2.5;
console.log(prodDecimals);


//Divide Decimals:
var quotient = 4.4/2.0;
console.log(quotient);


//Remainder operator (%)
var remainderValue;
remainderValue = 13 % 3;
console.log(remainderValue);


//Compound Assignment:
var a = 3;
var b = 4;
var c = 5;

a = a + 11; // a+=11 is the same thing
console.log(a);
b = b + 9; //  b+=9 is the same thing
console.log(b);
c = c + 7; //  c+=7 is the same thing
console.log(c);

a = a - 5; // a-=5 is the same thing
console.log(a);
b = b - 15; //b-=15 is the same thing
console.log(b);
c = c - 3; //c-=3 is the same thing
console.log(c);


a = a * 5; // a*=5;
console.log(a);
b = b * 2; // b*=2;
console.log(b);
c = c * 3; // c*=3;
console.log(c);


a = a /10; // a/=10; is the same thing
b = b/9; //b/=9; is the same thing
c = c/8; //c/=8; is the same thing


var myFirstName = 'Baris';
var myLastName = 'Kaplan';


var myStr = "I am a \"double quoted\" string inside \"double quotes\""; //usage of the escape charachter in javascript (\)
console.log(myStr);


//Escape Sequences in String:
// \' single quote
// \" double quote
// \\ backslash
// \n newline
// \r carriage return 
// \t tab
// \b backspace
// \f form feed

var myString = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myString);


var out = "I am the 1st " + " You are the second"; //concatination of two strings with + operator
console.log(out);

var str = "Hi !";
str+=" How are you ?"; //concatinating two strings using plus equals operator
console.log(str);

var myName = "Baris";
var output = "Hello, my name is " + myName +". What is your name ?\n";
console.log(output);


var var1 = "2";
var var2 = "3";
var1 += var2; //concatination of 2 and 3 
console.log(var1); //23
console.log(var2); //3



//to find the length of a string, just use .length property of Javascript

var nameVar = "Mike";

length = nameVar.length;
console.log(length);
console.log(nameVar[0]);
console.log(nameVar[1]);
console.log(nameVar[2]);
console.log(nameVar[3]);

var string = "Mello World !";

//string[0] = "H"; //this line will give error due to the string immutability

console.log(string);



console.log(string[string.length-1]);


function wordBlanks(noun,adjective,verb,adverb) {
    var res = "";
    
    res += "The " + adjective + " " + noun +  " " + verb + " " + "to the store" + " " + adverb;

    return res;
}


console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));

var myArray = ["Baris",29];

console.log(myArray[0]);
console.log(myArray[1]);

var mySecondArray = [2.0,3.44,4.55];
console.log(mySecondArray[0]);
console.log(mySecondArray[1]);
console.log(mySecondArray[2]);


//Nested Arrays
var multidimensionalArray = [[2.0,"hello"],[3,"hi"]];

var multiDimArray = [["How are you ?",44],["What is your age?",99]];


//Modifying arrays:

var myArr = [1,2,3,4,5];
console.log(myArr);
myArr[3] = 55; //After this line, myArr will be [1,2,3,55,5]
console.log(myArr);
myArr[0] = 44;
console.log(myArr);

var multDim = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
console.log(multDim[0][0]);
console.log(multDim[2][1]);

var secondMultDim = [[[1,2,3],4],[4,5,6],7];
console.log(secondMultDim[0][2]);
console.log(secondMultDim[1][1]);


//manipulate arrays with push() function in Javascript

var a = ["Hi","Hello","How are you"];
console.log(a);
a.push(["one","two","three"]); //here, push function will add ["one","two","three"] to the end of the array called a
console.log(a);


//manipulate arrays with pop() function

var array = [4,5,6,7,8,9,10,11,12,13];
console.log(array);
var remove = array.pop(); //pop will remove the last element of the array
console.log(array);

//manipulate arrays with shift() function
var array2 = [1,2,3,4];
console.log(array2);
var rem = array2.shift(); //it will remove the first element of the array called array2.
console.log(array2);


var array3 = ["hello","hi","lets go"];
console.log(array3);
array3.shift();//it will remove the first element of the array called array3.
console.log(array3);
array3.unshift("four"); //unshift function adds an element to the beginning of the array
console.log(array3);

var list = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]];

function myFunc() {
    console.log("Hello !");
}

//running the myFunc() function 4 times
myFunc();
myFunc();
myFunc();
myFunc();

function func() {
    console.log("Hi World !!!");
}

//funning the func() function 2 times
func();
func();


function funcSubtraction(k,l) {
    console.log(k-l);
}


funcSubtraction(11,7);
funcSubtraction(13,4);

function functionWithArguments(r,e) {
    console.log(r+e);
}

functionWithArguments(4,5);
functionWithArguments(6,7);

//global scope and functions
var globalVar = 16;

function fun1() {
   oopsGlobal = 9;
}

function fun2() {
    var out = "";
    if(typeof globalVar!= "undefined") { //since this function has an access to the global variable called globalVar and the globalVar is not assigned to undefined, this condition will be true.
        out+= "myGlobal: " + globalVar;
    }

    if(typeof oopsGlobal != "undefined") {
        out+= " oopsGlobal: " + oopsGlobal;
    }
    console.log(out);
}


fun2();

//local scope and functions : local scope is the scope inside of a function


function localScope() {
    var v = 11;
    console.log(v);
}

localScope();
//console.log(v); //this line will throw an error because it has not got an access to the variable named as v and located inside the function called localScope()

//Global Scope vs Local Scope

var wear = "Tshirt";

function outfit() {
    var wear = "Sweater";
    return wear;
}


console.log(outfit()); //will reflect the change of the variable called wear (this change is inside the outfit() function)
console.log(wear); //will print Tshirt


//return statement

function minusTen(number) { 
    return number-10;
}

console.log(minusTen(24));

function timesFive(number) {
    return number * 5;
}

console.log(timesFive(9));

var myVal = 3;

function takeCubeAndAdd2(num) {
    return num*num*num+2;
}

myVal = takeCubeAndAdd2(4);
console.log(myVal);

var testArray = [3,4,5,6,7];

function nextInLine(arr,item) { 
    arr.push(item);
    return arr.shift();
}

console.log("Before: "+JSON.stringify(testArray)); //JSON.stringify() method is used to convert an array to string.
console.log(nextInLine(testArray,9));
console.log("After: "+JSON.stringify(testArray));

//Booleans in JS: true or false


function welcomeBooleans() { 
    return false;
}

function welcomeBooleans2() { 
    return true;
}


//Conditional Logic by using if statements 

function bool(cond) { 
    if(cond) {
        return "Yes, it is true !!!";
    } 
    return "No, it is false !!!";
}


function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true !";
    }
       return "No, that was false !";
}

console.log(trueOrFalse(true));
console.log(bool(true));























