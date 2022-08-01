function testBiggerThan(num) {
    if(num > 0) {
        return "number is positive";
    } 
        return "number is negative";
}


console.log(testBiggerThan(-100));
console.log(testBiggerThan(97));


function testBiggerThanOrEqualTo(numVal) {
    if(numVal>=99) {
        return "99 or over !";
    }

    if(numVal>=66) {
        return "66 or over !";
    }
        return "less than 66";
}


console.log(testBiggerThanOrEqualTo(99));
console.log(testBiggerThanOrEqualTo(100));
console.log(testBiggerThanOrEqualTo(50));
console.log(testBiggerThanOrEqualTo(109));
console.log(testBiggerThanOrEqualTo(66));
console.log(testBiggerThanOrEqualTo(77));

function testLessThanOperator(n) {
    if(n<20) {
        return "under 20";
    }

    if(n<30) {
        return "under 30";
    }

    return "30 or over !!!!";
}

function testLessThanOrEqualToOperator(n) {
    if(n<=30) {
        return "30 or under 30";
    }

    if(n<=40) {
        return "40 or under 40";
    }

    return "Above 40 !!";
}


console.log(testLessThanOperator(34));
console.log(testLessThanOperator(44));
console.log(testLessThanOrEqualToOperator(34));
console.log(testLessThanOrEqualToOperator(24));
console.log(testLessThanOrEqualToOperator(44));

function testLogicalAnd(val) { 
    if(val<=50 && val>=25) { 
        return "Yes";
    }
    return "No";
}

testLogicalAnd(44);
testLogicalAnd(51);
testLogicalAnd(24);

function testLogicalOr(val) {
    if(val<50 || val>100) {
        return "outside the boundaries !!!";
    }
     
    return "inside the boundaries !!!";
}


console.log(testLogicalOr(60));

console.log(testLogicalOr(101));

console.log(testLogicalOr(49));
console.log(testLogicalOr(48));
console.log(testLogicalOr(77));


//else statements in JS

function testElse(val)  {
    var res = "";
    if(val>10) {
        result = "Bigger than 10";
    } else { 
        result = "10 or smaller";
    }
        return result;
}

//else if statement in JS

function testElseIfStatement(val){ 
      if(val>10) {
          return "Greater than 10";
      } else if(val < 6) {
          return "Smaller than 6";
      } else {
          return "Between 6 and 10";
      }

}

console.log(testElseIfStatement(11));
console.log(testElseIfStatement(1));
console.log(testElseIfStatement(8));
console.log(testElseIfStatement(13));

//chaining if else statements 

function sizeExample(num) {
    if(num<5) {
        return "tiny";
    } else if(num<10) {
        return "small";
    } else if(num<15){
        return "medium";
    } else if(num<20){
        return "large";
    } else {
        return "huge";
    }
}


console.log(sizeExample(4));
console.log(sizeExample(8));
console.log(sizeExample(22));
console.log(sizeExample(11));
console.log(sizeExample(16));
console.log(sizeExample(15));
console.log(sizeExample(2));
console.log(sizeExample(9));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home !!"];
function golfScore(par,strokes) {
    if(strokes == 1) {
         return names[0];
    } else if(strokes <= par-2) {
        return names[1];
    } else if(strokes == par-1) {
        return names[2];
    } else if(strokes == par) { 
        return names[3];
    } else if(strokes == par + 1) {
        return names[4];
    } else if(strokes == par + 2) {
        return names[5];
    } else if(strokes >= par + 3) {
        return names[6];
    }
}


console.log(golfScore(5,4));
console.log(golfScore(5,5));
console.log(golfScore(5,8));
console.log(golfScore(8,5));
console.log(golfScore(6,4));


//Switch statement in JavaScript

function caseInSwitch(val) { 
    var ans = "";
    switch(val) { 
        case 1:
            ans = "alpha";
            break;
        case 2:
            ans = "beta";
            break;
        case 3:
            ans = "gamma";
            break;
        case 4:
            ans = "teta";
            break;  
    }
    return ans;
}


console.log(caseInSwitch(5));
console.log(caseInSwitch(4));
console.log(caseInSwitch(3));
console.log(caseInSwitch(2));
console.log(caseInSwitch(1));

function isGreater(x,y) {
    return x>y;
}

console.log(isGreater(12,22));
console.log(isGreater(32,22));


function abTest(a,b) { 
    if(a<=0 || b<=0) { 
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a),Math.sqrt(b)));
}


console.log(abTest(-2,-2));
console.log(abTest(-2,-4));
console.log(abTest(-2,0));
console.log(abTest(3,9));


//Counting cards

var cardCount = 0;
function cardCounting(card) { 
    switch(card) { 
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            cardCount++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            cardCount--;
            break;
    }
    var holdBet = 'Hold';
    if(cardCount>0){
        holdBet = 'Bet';
    }
    return cardCount + " " + holdBet;
}


cardCounting(2);
cardCounting(4);
cardCounting(3);
cardCounting(7);
cardCounting('K');
cardCounting('A');
console.log(cardCounting(5));


//Objects

var myDog = {
   "dogName": "Camper",
   "legNum": 4,
   "tails": 1,
   "friends": ["everything"]
};


var yourDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}

//Accessing object properties by using dot notation
console.log(myDog.dogName);
console.log(myDog.friends);
console.log(myDog.legNum);
console.log(myDog.tails);

//Accessing object properties by using bracket notatiion

var myObj = {
    "an entry": "crispy chicken",
    "a meal": "salmon fish",
    "a drink": "water"
}

console.log(myObj["an entry"]);

console.log(myObj['a meal']);
console.log(myObj['a drink']);

//Updating object properties

myObj["a drink"] = "cola";
myDog.dogName = "puppy";
yourDog.legs = 5;
console.log(myObj);
console.log(myDog);
console.log(yourDog);

//addding new properties with dot notation and bracket notation
myDog.bark = "bow bow";
yourDog['bark'] = "woof";
console.log(myDog);
console.log(yourDog);


//deleting properties from an object
delete myDog.bark;
delete myDog.tails;
console.log(myDog);

//using objects for lookups

function phoneticLookup(val) {
    var res = "";
    var lookup = {
          "alpha": "Adams",
          "bravo": "Boston",
          "charlie": "Chicago",
          "delta": "Denver",
          "echo": "Easy",
          "foxtrot": "frank"
    };
    res = lookup[val];
    return res;
}

console.log(phoneticLookup("charlie"));


var triangle = {
    firstPerpendicularEdge: 3,
    secondPerpendicularEdge: 4,
    hypotenuse: 5
};

function checkObject(checkProp) {
    if(triangle.hasOwnProperty(checkProp)) { 
        return triangle[checkProp];
    } else {
        return "not found !!!";
    }
}

console.log(checkObject("firstPerpendicularEdge"));
console.log(checkObject("hello"));

var myStorage = {
      "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "mike"
        }

    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);


var collection = {
    "2548": { 
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Balmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var copyCollection = JSON.parse(JSON.stringify(collection));

function updateRec(id,prop,value) {
    if(value === "") {
        delete copyCollection[id][prop];
    } else if(prop === "tracks") {
        copyCollection[id][prop] = copyCollection[id][prop] || [];
        copyCollection[id][prop].push(value);
    } else {
        copyCollection[id][prop] = value;
    }



    return copyCollection;
}


console.log(updateRec(2468, "tracks", "test"));
console.log(updateRec(5439,"artist","ABBA"));


//While Loops:

var array = [];
var i = 0;
while(i < 5) { //while loop in javascript
    array.push(i);
    i++;
}
//unshift() method adds the element at the start of the array; however, push() adds the element at the end of the array.
console.log(array);

var array2 = [];
for(var i = 0; i<5; i++) { //for loop in javascript
     array2.push(i);
}

console.log(array2);
console.log(array2.length);


var myArrayValues = [];
for(var k = 1; k < 6 ; k++) {
    myArrayValues.push(k);
}

console.log(myArrayValues);


var myArrayValues2 = [];
for(var i = 0; i < 10; i+=2){
    myArrayValues2.push(i);
}

console.log(myArrayValues2); //will print even numbers until 8.

var myArrayValues3 = []
for(var j = 1; j < 10; j++){ 
    myArrayValues3.push(j);
}
console.log(myArrayValues3); //will print odd numbers until 9

var myArrayValues4 = []
for(var w = 10; w > 0 ; w-=2){ //backward for loop, will print even numbers from 10 to 2 in a backward order.
myArrayValues4.push(w);
}

console.log(myArrayValues4);

var myArrayValues5 = []
for(var q = 9 ; q > 0; q-=2){ //backward for loop, will print odd numbers from 1 to 9 in a backward order.
    myArrayValues5.push(i);
}


var ourArrayValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var sumValue = 0;
for(var i = 0 ; i < ourArrayValues.length; i++){
    sumValue+=ourArrayValues[i];
}

console.log(sumValue);

var myArrValues = [9,8,5,1,3,4];

var total = 0;

for(var i = 0; i <myArrValues.length; i++){
         total+=myArrValues[i];
}

console.log(total);


//Nested for loops:

function multiplyAll(arr) { 
    var product = 1;
    for(var i = 0; i < arr.length; i++) { 
        for(var j = 0; j < arr[i].length; j++) {
               product = product * arr[i][j];
        }

    }
    return product;

}


var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);



//do while loops
var arrVal = [];
var s = 10;

do {
    arrVal.push(s);
    s++;
} while (s<5)

console.log(s,arrVal);


//random decimal number creation


function randomFunction() { 
    return Math.random();
}

console.log(randomFunction());


var randInt = Math.floor(Math.random()*20); //will be an integer between 0 and 19

function randomInteger() {
    return Math.floor(Math.random()*10); //will be an integer between 0 and 9
}

console.log(randomInteger());
console.log(randInt);

function randomIntegersInARange(minVar,maxVar){
    return Math.floor(Math.random() * (maxVar-minVar+1)) + minVar;
}


console.log(randomIntegersInARange(2,6));


function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("589");
convertToInteger("111001");


//conditional (ternary) operators

function checkEqual(a,b) {
    if(a===b){
        return true;
    } else {
        return false;
    }
}


//Version with ternary operator
function checkEqual2(a,b){
    return a===b ? true : false;
}


//condition ? statement-if-true: statement-if-false;

checkEqual(2,3);
checkEqual2(5,5);
checkEqual2(5,9);

 function checkSign(num){
     return num>0 ? "positive" : num < 0 ? "negative": "zero";
 }


 console.log(checkSign(100));
 console.log(checkSign(0));
 console.log(checkSign(-11));


 //Arrow functions

 var magic = function() {
     return new Date();
 };
 console.log(magic);


 var m = () => {
     return new Date();
 }

 console.log(m);

 var u = () => new Date();



 console.log(u);

 
 var myConcatination = (array1,array2) => array1.concat(array2);

 console.log(myConcatination([1,2],[3,4,5]));
