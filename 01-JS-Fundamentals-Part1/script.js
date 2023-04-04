/*
////////////////////////////////////
// Linking a JavaScript File
let js = 'amazing';
if (js === 'amazing') alert ('JavaScript is fun!!')

console.log(40+8+23-10);


// Value and Variables

console.log('Jonas');  //value

// variable name convection
let firstName = "Jonas";
console.log(firstName)

let person = "Jonas";
let PI = 3.1415;  //constant var in CAPS

// poor naming convection
let job1 = "Coder";
let job2 = "Teacher";

// better naming convection
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
////////////////////////////////////

*/


/*
/////////////////////////////////////
// Data types 
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'sonali');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//dynamic typing eg.
let year;
console.log(year);
console.log(typeof year);

// assiging new values to already defined variable
year = 1991;
console.log(typeof year);

console.log(typeof null);
/////////////////////////////////////
*/


/*
/////////////////////////////////////
//let, const, var
// It creates a var that we cannot reassign
// we used "let" to declare variables that can be changed later (re-assiging )
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992;        // this will throw an error
//const job;               // cannot declare empty const var

var job = "Programmer";
job = "teacher";

lastname = "Joshi";
console.log(lastname);
/////////////////////////////////////
*/


/*
/////////////////////////////////////
// Basic Operators
// Math Operators
const now = 2023;
const ageJonas = now - 1991;
const ageSonali = now - 2001;
console.log(ageSonali, ageJonas);

console.log(ageSonali * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sonali";
const lastName = "Joshi";
console.log(firstName +" "+ lastName);

//Assignment operators
let x = 10 + 5;  // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; //x = x - 1 = 99
x--;
console.log(x);

//Comparison operator
console.log(ageJonas > ageSonali); // > ,<, >=, <=
console.log(ageSonali >= 18);

const isFullAge = ageSonali >= 18;

console.log(now - 1991 > now - 2001);
///////////////////////////////////////

*/


/*
///////////////////////////////////////
// Operator Precedence
const now = 2023;
const ageJonas = now - 1991;
const ageSonali = now - 2001;

console.log(now - 1991 > now - 2001);

console.log(25 - 10 - 5);

// right to left
let x , y ;
x = y = 25 - 10 - 5;  // x = y = 10, x = 10
console.log(x ,y);

const averageAge = (ageJonas + ageSonali) / 2;
console.log(ageJonas, ageSonali, averageAge);
///////////////////////////////////////////
*/



///////////////////////////////////////
// Coding Challange #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
/*
let marksWeight = 95; //78 
let marksHeight = 1.88;  //1.69 

let johnWeight = 85; //95
let johnHeight = 1.76; //1.88

const marksBmi = marksWeight / (marksHeight * marksHeight);
const johnBmi = johnWeight / (johnHeight * johnHeight);
console.log(marksBmi, johnBmi);

const markHigherBMI = marksBmi >  johnBmi;
console.log(markHigherBMI)

///////////////////////////////////////
*/


/*
///////////////////////////////////////
// Strings and Template Literals

const firstName = "saurabh";
const job = "engineer";
const birthYear = 1997;
const year = 2023

// string literal
const saurabh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(saurabh);

//template Literals
const saurabhNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(saurabhNew);

console.log(`just a regular strings ....`);

console.log('String with \n\
multiple  \n\
lines');

console.log(`Strings
with multiple lines
using template Literals`);

//////////////////////////////////////////
*/


/*
///////////////////////////////////////
// Taking Decisions: if - else statement
const age = 15;

if (age >= 18) {
    console.log("saurabh can start driving 😊")
} else {
    yearLeft = 18 - age;
    console.log(`Saurabh is too young, wait another ${yearLeft} years!`)
}


const birthYear = 2001;
let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)
////////////////////////////////////////
*/


////////////////////////////////////////
// Coding Challenge # 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

/*
let marksWeight = 78; 
let marksHeight = 1.69 

let johnWeight = 95;
let johnHeight = 1.88;

const marksBmi = marksWeight / (marksHeight * marksHeight);
const johnBmi = johnWeight / (johnHeight * johnHeight);

if (marksBmi > johnBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's (${johnBmi})!`)
}else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark (${marksBmi})!`)
}
*/
////////////////////////////////////////////////////


/*
////////////////////////////////////////////////////
// Type Conversion and Coercion

// type convertion (we manually convert from one type to another)
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // will give NaN (Not a number)
console.log(typeof NaN);

console.log(String(23), 23);


// type coerion (when js automatically converts type for us)

// this happens whenever a operator is dealing with 2 values that have different types
// so BTS javascript will convert one of the value to match the other value

console.log('I am ' + 23 + 'years old');
// the above no. get converted to string due to '+' operator it converts no. to string

console.log('23' - '10' - 3);
// with '-' operator strings are converted to numbers

console.log('23' * '2');
console.log('23'/ '2');

let n = '1' + 1; // --> 11 (since no.--> str)
n = n - 1;  // 10 --> since '11' - 1  (str --> no.)
console.log(n)
console.log(typeof n)

console.log(2+3+4+'5'); //2+3+4 =9 --> 95
console.log('10' - '4' - '3' - 2 + '5')
////////////////////////////////////////////////////
*/


////////////////////////////////////////////////////
// Truthy and Falsy value

/*Falsy values are the values that are not exactly false but 
will become false when we try to covert them into a boolean
 5 falsy values : 0, '',undefined, null, NaN
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sonali')); // since the string is not empty hence it is truthy value
console.log(Boolean({}));
console.log(Boolean('')); // empty string results in falsy value

const money = 0;
if (money) {
    console.log(`Don't spend it all !`)
} else {
    console.log('You should get a job !')
}

//since height is undefined & undefined is falsey value
let height;
if (height){
    console.log('YAY! Height is defined')
} else {
    console.log('Height is Undefined!!')
}

////////////////////////////////////////////////////
*/



////////////////////////////////////////////////////
// Equality Operator: ==(loose) vs. ===(strict)
/*
const age = '18';
if (age === 18) console.log('you just became an adult :D (strict)')

if (age == 18) console.log('you just became an adult :D (loose) ')

console.log(18 === 18); 
console.log('18' === 18); // false
console.log('18' == 18); //true

//get value(input) from web page
const favourite = Number(prompt("what's your favourite number!"))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23){ 
    console.log('Cool ! 23 is amazing number')
} else if (favourite === 7){
    console.log('7 is also a cool number')
} else if (favourite === 9){
    console.log('9 is also a cool number!')
} else {
    console.log('no is not 23 or 7')
}

//different operator
if (favourite !== 23) console.log('why not 23?')


// Logical Operator, AND, OR & NOT operators
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); //And
console.log(hasDriverLicense || hasGoodVision); //OR
console.log(!hasDriverLicense); //Not

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sara is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired); //OR


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive')
} else {
    console.log('Someone else should drive')
}
*/
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
/*
const dolphinsAvg = (96+108+89)/3;
const koalasAvg = (88+91+110)/3;

if (dolphinsAvg > koalasAvg){
    console.log(`Winner are the Dophins`)
}else if (dolphinsAvg === koalasAvg){
    console.log(`its a draw`)
}else {
    console.log(`Winner is Koalas`)
}
*/

/*
//Bonus 1 and 2
const dolphinsAvg = (97 + 112 +101) /3;
const koalasAvg = (109+ 95 +106)/3;
const minPointToWin = 100

console.log(dolphinsAvg)
console.log(koalasAvg)

if (dolphinsAvg > koalasAvg && dolphinsAvg >= minPointToWin){
    console.log(`Winner are the Dophins`)
}else if (koalasAvg > dolphinsAvg && koalasAvg >= minPointToWin) {
    console.log(`Winner is the  Koalas`)
}else if (dolphinsAvg === koalasAvg && dolphinsAvg >= minPointToWin && koalasAvg >= minPointToWin){
    console.log(`its a draw both wins`)
}else {
    console.log("no winner!")
}

//////////////////////////////////////////////////
*/


/*
///////////////////////////////////////////////////
// The Switch Statement 
const day = 'Saturday';

switch(day) {
    case 'monday':   // day === 'monday'
        console.log('do cardio in gym');
        console.log('Go to coding contest');
        break;
    case 'Tuesday':
        console.log('Do legs workout');
        break;
    case 'Wednesday':
        console.log('do upper body workout');
        break;
    case 'Thursday':
        console.log('Do lower body workout');
        break;
    case 'Friday':
        console.log('Do shoulders workout');
        break;
    case 'saturday':
    case 'sunday':
        console.log("rest day enjoy the weekend");
        break
    default:
        console.log('not a valid day');
}


if (day === 'monday'){
    console.log("today is monday")
}else if (day == 'Tuesday'){
    console.log("today is tuesday")
}else if (day === 'Wednesday'){
    console.log("today is wednesday")
}else if (day === 'Thursday' || day === 'Friday'){
    console.log('write code examples :)')
}else if (day === 'Saturday'|| day === 'Sunday'){
    console.log("Enjoy it the weekend")
}else {
    console.log('invalid day !!!!')
}
///////////////////////////////////////////////////
*/


/*
//////////////////////////////////////////////////
//statements and expression

//statement are full sentences that translate actions
//expression: is a piece of code that produces a value eg. 3+4 is an expression

3 + 4
1991
true && false && !false

if (23 > 10){
    const str = '23 is bigger';
}

const me = 'sonali'
console.log(`I'm ${2037-1991} years old ${me}`)
////////////////////////////////////////////////////
*/


/*
////////////////////////////////////////////////////
// Conditional operator (ternary)

const age = 13;
age >= 18 ? console.log('I can drive my own car') : console.log('I cannot drive my own car :(');

const validDrive = age >= 18 ? 'drive' : 'not drive';
console.log(validDrive);

let validDrive2;
if (age >= 18){
    validDrive2 = 'drive';
}else {
    validDrive2 = 'cannot';
}
console.log(validDrive2)

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);
////////////////////////////////////////////////////////
*/


//////////////////////////////////////////////////////////
// Coding Challange #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

const bill = 430;
let tip;

bill >= 50 && bill <=300 ? tip = bill * 0.15 : tip = bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)

//or

tip = bill >= 50 &&  bill <= 300 ? bill * 0.15 : bill *0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)


///////////////////////////////////////////////////////////////////





//End of 01-JS-Fundamental- Part01//

