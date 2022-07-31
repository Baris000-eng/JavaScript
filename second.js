//Comparison with the equality operator

// = is the assignment operator
// == is the comparison operator
function equalTest(val) { 
    if(val == 12) { 
        return "equal";
    }
       return "not equal";
}


console.log(equalTest(11));
console.log(equalTest(12));

//comparison with strict equality operator
// strict equality operator is === . Strict equality operator does not convert the values left and right of the operator to a specific type.
function testStrictEquality(val) {
    if(val === 7) {
        return "equal";
    }
        return "not equal";
}

testStrictEquality(7); //will log true
testStrictEquality('7'); //will log false

function comp(x,y){ 
    if(x==y) {  // == performs type conversion
        return "equal";
    }
        return "not equal";
}

function comp2(x,y){ 
    if(x===y) {  // === does not perform type conversion
        return "equal";
    }
        return "not equal";
}




console.log(comp(11,"11"));
console.log(comp2(11,"11"));


//inequality operator : !=
function testNotEqual(val) {
    if(val != 99) {
        return "not equal";
    }
    return "equal";
}

console.log(testNotEqual(99));
console.log(testNotEqual('99'));
console.log(testNotEqual(98));
console.log(testNotEqual('98'));

//strict inequality operator : !==
function testStrictNotEqual(val) { //it will directly compare the val with 99 without doing type conversion
    if(val !== 99) {
        return "not equal";
    }
    return "equal";
}


console.log(testStrictNotEqual(99));
console.log(testStrictNotEqual('99'));
console.log(testStrictNotEqual(98));
console.log(testStrictNotEqual('98'));


