// Basics of JavaScript

/*
    Hey Mom look at my multiline comment!
    Let's put it on the fridge
    Primitive data types in JS: strings, integers, Booleans, floats, arrays, objects (very simular to python dictionaries)
    functions in JS
    Loops
    Scripting vs Programming Language
*/

// String Variables

var first_name = 'Zach';

// Display the value in JavaScript
console.log(first_name);

// Assign an integer
var some_number = 32;
console.log(some_number);

// Show all attributes of a document or id
console.dir(document);

// Float Variable
var some_float = 3.141592;
console.log(some_float);

// Array
var some_array = [1,2,3,4];
console.log(some_array);

// Objects
var some_object ={'Yee':'Haw'};
console.log(some_object);

// JavaScript Hoisting
a_num = 10;
console.log(a_num);
var a_num;
console.log(a_num);

console.log(some_random_variable); // Still runs but returns Undefined which is basically a None type; not a good practice.
var some_random_variable = 'This is a random variable';
console.log(some_random_variable);

// A better way of declaring a variable is by using 'let' or 'const' keywords
let x;
console.log(x);
x = 3;
console.log(x);

const y = 5;
console.log(y);

// Video break 1

// Basic math operations

//  Addition
let sum = 5 + 5 
console.log(sum)

// Subtraction
let diff = 5 - 4
console.log(diff)
// or
let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication and division same as python, exponents as well

// Some other math operations
// Finding the Floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// Alternatively, Math.cel(n) brings back the ceiling

// Mind bender
let crazy_stuff = some_float + '4' // Concadenates 4 to some_float becauuse '4' is a string 
console.log(crazy_stuff)

// Mind bender 2
let crazy_stuff_2 = some_float + parseFloat('4') // Actually adds the value of 4 to some_float
console.log(crazy_stuff_2)

// Redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

// Using the let keyword for the same
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

// Don't retype let on later variable changes

//  Regular named functions
function addNums() {
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums())

// Alternative
let addNum2 = function(num, num2){
    return num + num2
}

console.log(addNum2(6,7))

// ES6+ Arrow Function in JavaScript
// Our first example shows how to use a single parameter in an arrow function without parentheses
// This can only be done with one parameter if you dont want to use parentheses

let cubed = num => {
    return num**3
}
console.log(cubed(4))

// No params in an arrow function
let someFunc = () => {
    return 5
}
console.log(someFunc())

// With parentheses 
let cubed2 = (num) => {
    return num**3
}
console.log(cubed2(4))

// If you have multiple parameters you must have parentheses around them 
let toThePower = (num, power) => {
    return num ** power
}

console.log(toThePower(4,3))

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})
('Joel'))
// console.log((function body)(parameter value))

// Video Break 2 

// Control Flow 
// if statements
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(22))

// Ternary Operators
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
}

console.log(determineAge2(88))

// LOOOOOOOOPS
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

// python version
// def count_by_one():
//     for i in Range(0, 20, 1):
//         print(i)
//     return 'Counting has stopped'

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(decreaseByOne())

// While loop
function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `This number is... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

// Do While Loop
function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += `this number is... ${i} \n`;
        i++;
    }

    while(i < 10)
    return text
}

// Do while will run at lease one time!!!
console.log(countWithDoWhile())


// Create an array
let group_of_names = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty']

// Index the first position
console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry, ben, misty)
console.log(group_of_names)
console.log(ben)

// Method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(showAllNames())

// Method 2 arrow function
console.log(group_of_names.forEach(i => console.log(i)))

// JS Array Method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

// More methods: map, filter, reduce

// .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

// long form of .map()
let b_names_test = function(){
    let test_array = [];
    for (let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter( i => i.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

//  You can also use methods like .join, .slice, .search, .splice





















