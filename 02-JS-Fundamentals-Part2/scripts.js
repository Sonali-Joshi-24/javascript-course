// strict mode: is a special mode that helps you to write secure js code 
'use strict';

/*
/////////////////////////////////////
// strict mode use

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

/////////////////////////////////////
*/


/*
/////////////////////////////////////
// Functions

// a function is a piece of code that we can use over and over again

function logger() {
    console.log('My name is sonali');
}

// calling / running / invoking functions
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//capturing val in var
const applejuice = fruitProcessor(5,0);
console.log(applejuice)

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice)

///////////////////////////////////////
*/


/*
/////////////////////////////////////
// Functions Declaration vs. Expression

// function declaration
// we can call the function before it is defined
function calAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calAge1(1997);
console.log(age1)



// function expression (function without name "anonymus func()")
const calAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calAge2(2001);
console.log(age2);

///////////////////////////////////////
*/


/*
/////////////////////////////////////////
// Arrow Function

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1997);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retires in ${retirement} years!`
}

console.log(yearsUntilRetirement(1991, 'sonali'));
console.log(yearsUntilRetirement(1997, 'Omkar'));

/////////////////////////////////////////
*/


/*
///////////////////////////////////////
// Functions Calling Other Functions

// if we get 2 apples it will cut into 8 pieces
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));

///////////////////////////////////////
*/


/*
///////////////////////////////////////
// Reviewing Functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

///////////////////////////////////////
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/


/*
const calcAverage = (a,b,c) => (a + b + c)/3;

//test 1
let dolphinsScore = calcAverage(85,54,41);
let koalasScore = calcAverage(23,34,27);
console.log(dolphinsScore, koalasScore);


function checkWinner(dolphinsScore,koalasScore){
    if (dolphinsScore >= 2 * koalasScore) {
        console.log(`dolphins wins ${dolphinsScore} Vs. ${koalasScore}`)
    }
    else if (koalasScore >= 2* dolphinsScore){
        console.log(`koalas wins ${koalasScore} Vs. ${dolphinsScore}`)
    }
    else {
        console.log('No team wins')
    }
}

checkWinner(dolphinsScore,koalasScore)

checkWinner(572, 111);

//test 2
dolphinsScore = calcAverage(44 ,23 ,71);
koalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalasScore)
checkWinner(dolphinsScore,koalasScore)

*/

/* another way for above func
const checkWinner = function(dolphinsScore, koalasScore){
    // if else conditions here
}
///////////////////////////////////////
*/


/*
///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Tony';
const friend3 = 'juels';

const friends = ['Michael', 'Tony', 'juels'];
console.log(friends)

const y = new Array(1991,1984,2008,2020); // another way of defining array

console.log(friends[0]); // access 1st element of array
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

//replace 
friends[2] = 'Jay';
console.log(friends);

//friends = ['bob','Alice'] // cannot do this

const firstname = 'sona'
const info = [firstname, 'josh' , 2023-1997, 'teacher', friends]

console.log(info)

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3)

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);


///////////////////////////////////////
*/


/*
///////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['sonali', 'saurabh', 'omkar'];

// add elements at end
friends.push('Jay');  
console.log(friends);

//add elements at begining
friends.unshift('John');
console.log(friends)

//remove last elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//remove 1st element
friends.shift();
console.log(friends)

//determine the position of elements
console.log(friends.indexOf('sonali'));
console.log(friends.indexOf('bob'));

//ES6 method: includes = will return true if element is present or false if not
friends.push(23);

console.log(friends.includes('sonali'));
console.log(friends.includes('alice'));
//console.log(friends.includes('23'));// this will return false
console.log(friends.includes(23));


if (friends.includes('sonali')){
    console.log('you have a friend called sonali');
}
///////////////////////////////////////
*/


///////////////////////////////////////
// Coding Challange #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

/*

const calcTip = function(bill) {
    return bill >= 50 & bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >=50 & bill <= 300 ? bill * 0.15 : bill * 0.2;


// function calcTip(bill){
//     if (bill >= 50 & bill <= 300 ){
//         let tip = 0.15 * bill
//         return tip;
//     }
//     else {
//         let tip = 0.2 * bill
//         return tip;
//     }
// }


const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] +  tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(100));
console.log(bills, tips, total)

///////////////////////////////////////
*/



/*
///////////////////////////////////////
// Introduction to Objects


const info = {
    firstName : 'sonali',
    lastName : 'josh',
    age : 2037 - 1997,
    job : 'teacher',
    friends : ['alex', 'bob', 'charlie']
};
console.log(info)

//Dot vs Bracket Notation


console.log(info.lastName);
console.log(info['lastName']);

const nameKey = 'Name';
console.log(info['first' + nameKey])
console.log(info['last'+ nameKey])

// console.log(info.'last' + nameKey);

const infoNeeded = prompt('What do you want to known in info ? Choose between firstName, lastName, age, job and friends');

if (info[infoNeeded]){
    console.log(info[infoNeeded]);
}else {
    console.log('Wrong Request :| , Choose between firstName, lastName, age, job and friends!')
}

info.location = 'india';
info['some_info'] = 'someinfo';
console.log(info)

//mini challange here
console.log(`${info.firstName} has ${info.friends.length} friends, and his best friend is called ${info.friends[0]}`)


//Object Methods

const information = {
    firstName : 'sonali',
    lastName : 'josh',
    birthYear : 1997,
    job : 'teacher',
    friends : ['alex', 'bob', 'charlie'],
    hasDriverLicense: true,

    // calcAge: function(age){
    //     return 2023 - age;
    // }

    // calcAge: function(){
    //     // console.log(this)
    //     return 2023 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        if (this.hasDriverLicense){
            console.log(`${this.firstName} is a ${this.age}-years old ${this.job}, and she has driver's lincense!`)
        }else {
            console.log(`${this.firstName} is a ${this.age}-years old ${this.job}, and she does not have driver's lincense!`)
        }
    }
};
console.log(information.calcAge());

console.log(information.age);
console.log(information.age);

information.getSummary();


// console.log(information['calcAge'](1997));
///////////////////////////////////////
*/


/////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

/*
const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height : 1.69,
    calcBMI : function(){
        return this.markBMI = this.mass / (this.height * this.height)
    }
}
const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI : function(){
        return this.johnBMI = this.mass / (this.height * this.height)
    }
}
mark.calcBMI();
john.calcBMI();

// console.log(mark.markBMI); // this.markBMI means mark.markBMI so it creates a property named markBMI as we studied
// console.log(john.johnBMI);

//// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.markBMI > john.johnBMI){
    console.log(`${mark.fullName} BMI (${mark.markBMI}) is higher than ${john.fullName} (${john.johnBMI})`)
} else if (john.johnBMI > mark.markBMI){
    console.log(`${john.fullName} BMI (${john.markBMI}) is higher than ${mark.fullName} (${mark.johnBMI})`)
}else{
    console.log('hmm ig both have equal bmi')
}

/////////////////////////////////////////
*/


/*
/////////////////////////////////////////
// Iteration: The for Loop


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


//for loop keeps running while condition is TRUE
for(let rep= 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


//Looping Arrays, Breaking and Continuing 

const info = [
    'Jonas',
    'Schmedthmann',
    'teacher',
    2023 - 1991,
    ['Micheal', 'Peter', 'Steven']
];

const types = []; // initialize an empty arr to store dtypes of ele

for(let i = 0; i < info.length; i++){
    // reading info array
    console.log(info[i]);

    // filling types array 
    // types[i] = typeof info[i];
    types.push(typeof info[i]);
}
console.log(types)



const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log('-----only strings------')
for(let i = 0; i < info.length; i++){
    if(typeof info[i] !== 'string') continue;

    console.log(info[i], typeof info[i])
}

console.log('-----break with number------')
for(let i = 0; i < info.length; i++){
    if(typeof info[i] === 'number') break;

    console.log(info[i], typeof info[i])
}


// Looping backward and Loops in Loops

const info = [
    'Jonas',
    'Schmedthmann',
    'teacher',
    2023 - 1991,
    ['Micheal', 'Peter', 'Steven']
];
//looping backward
for (let i = info.length-1; i >= 0; i--){
    console.log(i, info[i])
}

//loop within loop
for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`--------------Starting exercise ${exercise}`); 

    for(let rep = 1; rep <= 5 ; rep++){
        console.log(`Exercise ${exercise} lifing weights repetition ${rep}`);
    }
}


// The While Loop

// for(let rep= 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

rep = 1
while (rep <= 5){
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++
}


// roll the dice unless u find 6
let dice = Math.trunc(Math.random() * 6) + 1

while(dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1

    if (dice === 6) console.log('loop is about to end !!!')
}
///////////////////////////////////////////////
*/


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

/*
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const total = []
const tips = []

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
}

for(i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i])

}
console.log(bills, total, tips)

//second challange

const calcAverage = function(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]))
console.log(calcAverage(total));
console.log(calcAverage(tips))
*/

