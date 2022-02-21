//For commenting code in JavaScript
console.log('Hello World');

let name= "Baris";//double quote or single quote can be used for declaring strings. 
console.log(name);

//variables cannot start with a number (ex: 2Brs)
//variables are case-sensitive (let brs vs let Brs; brs and Brs are different)

let interestRate= 0.3;
interestRate= 1;
console.log(interestRate-1)


let myName= "Baris";  //String literal
let myAge= 22; //Number Literal
let is_accepted= false; //Boolean Literal
let firstName= undefined;
let lastName= null;

let student = { //object declaration
   gpa: 4.0,
   major: "cs"
};

console.log(student.gpa)//gpa of the student object
console.log(student.major)//major of the student object

//typeof checks the type of datatype.

//Arrays in Javascript & Array Manipulations
let pickedColors= ['red','yellow'];
console.log(pickedColors[0]); //first element of the array
console.log(pickedColors[1]); //second element of the array
console.log(pickedColors.length);

pickedColors[2]='gray';


console.log(pickedColors)
console.log(pickedColors.length)

pickedColors[2]=3;//making 3rd array element 2.

console.log(pickedColors);
console.log(pickedColors.length)


//functions in JavaScript 


function greet(name){ //function declaration
    console.log('Hello ' +name);
} //name is parameter here

function greet_v2(name,surname){
    console.log('Hello ' +name+ ' ' +surname)
}

greet("Baris"); //calling greet function, Baris is argument here
greet_v2("Mike", "Thompson")//calling another greet function (calling with 2 arguments. First one, Mike. Second one, Thompson.)


//Function returning the cube of the number passed
function cube(number){
    return number*number*number; //returning cube of the number 
}

let my_number= cube(cube(2));
console.log(my_number)