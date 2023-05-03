
'use strict';

/*

///////////////////////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear){
    const age = 2023 - birthYear

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output)

        //block scope
        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven'

            // Reassigining Outer scope variable
            output = 'NEW OUTPUT!'

            const str = `Oh and you're a millenial ${firstName}`
            console.log(str)

            function add(a , b){
                return a+b
            }

        }

        // console.log(str)           //cannot access var outside block
        console.log(millenial)
        //console.log(add(2,3))      //cannot access func() as func() are block scope, but only limited to strict mode is ON
        console.log(output)
        
    }
    printAge()
    return age
}

const firstName = 'Sonali'    //global variable
calcAge(1991)

//cannot access age variable since it is out of scope
//console.log(age)         

///////////////////////////////////////////////////////

*/


/*
/////////////////////////////////////////////////////
// Hoisting and TDZ in Practice


//Variables
console.log(me)
// console.log(job)
// console.log(year)

var me = "jonas"
let job = "teacher"
const year = 1991


//Functions

console.log(addDecl(2,3))       //can call before defined
//console.log(addExpr(5,3))       // throw an refernece error since it uses Const and let (TDZ)
//console.log(addArrow(1,2))      // throw an refernece error since it uses Const and let (TDZ)

function addDecl(a,b){
    return a + b
}

const addExpr = function(a,b){
    return a + b
}

var addArrow = (a,b) => a + b


//Example : Why not to use "var"

//when there is no products delete
if (!numProducts) deleteShoppingCart()   

var numProducts = 10

function deleteShoppingCart(){
    console.log(`All product deleted!`)
}

//Example 2
var x = 1
let y = 2
const z = 3

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

////////////////////////////////////////////////////////////////
*/



/*
////////////////////////////////////////////////////////////
// This Keyword

//console.log(this)   // point to window (since global scope)


// will return undefined
const calcAge = function(birthYear){
    console.log(2023 - birthYear)
    // console.log(this)
}
calcAge(2001)


// also point to window since arrow function does not own a this keyword (point to this it parent scope and that happens to be windows-obj)
const calcAgeArrow = birthYear =>{
    console.log(2023 - birthYear)
    // console.log(this)
}
calcAgeArrow(2001)


const sonali = {
    year : 2001,
    calcAge : function(){
        console.log(this) // here "this" means "sonali"
        console.log(2023 - this.year)

    }
}
sonali.calcAge()

const matilda = {
    year : 2017
}
//method borrowing we borrowed method from one object to another
matilda.calcAge = sonali.calcAge
matilda.calcAge()                                // this keyword always points to the object it is calling the method


const f = sonali.calcAge
// console.log(f)
// f()

////////////////////////////////////////////////////////////
*/


/*
////////////////////////////////////////////////////////////
// Regular Function Vs. Arrow Function

//the arrow function wich does not have it own this keyword will use the this keyword from the global scope i.e. the window object

const sonali = {
    firstName : 'Sonali',
    year : 2001,
    calcAge : function(){
        // console.log(this) 
        console.log(2023 - this.year)

        //Solution 1
        // const self = this     // self or that
        // const isMillenial = function(){
        //     // console.log(this.year >= 1981 && this.year <= 1996)
        //     console.log(self.year >= 1981 && self.year <= 1996)

        // }

        //Solution 2
        // arrow function inherits the this keyword from its parent scope
        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)

        }
        isMillenial()
    },
    greet : () => {
        console.log(this)
        console.log(`Hello ${this.firstName}`)
    } 
}
sonali.greet()
sonali.calcAge()


//Example 3
// Arguments Keyword
const addExpr = function(a,b){
    console.log(arguments)
    return a + b
}
addExpr(2,5)
addExpr(2,5,8,6)
 
var addArrow = (a,b) => {
    console.log(arguments)
    return a + b
}
addArrow(2,5,8)
////////////////////////////////////////////////////////////
*/



////////////////////////////////////////////////////////////
// Primitive  Vs. Objects (Primitive Vs. Reference types)

// let age = 30
// let oldAge = age
// age  = 31
// console.log(age)
// console.log(oldAge)


// const me = {
//     name : 'Jonas',
//     age : 30
// }
// const friend = me
// friend.age = 27
// console.log('Friend: ' , friend)
// console.log('Me: ', me)


// primitive types

let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName)
console.log(oldLastName)

// reference types 
const jessica = {
    firstName: 'Jessica',
    lastName : 'Williams',
    age : 22
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage : ', jessica)
console.log('After Marriage : ', marriedJessica )


// Copying objects
// shallow copy and Deep copy/clone
const jessica2 = {
    firstName: 'Jessica',
    lastName : 'Williams',
    age : 22,
    family : ['Alice','Bob']
}
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

//add new family members
jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage : ', jessica2)
console.log('After marriage: ', jessicaCopy)


// but object.assign({},) only creates a shallow copy means if we have a object within object 
// only the 1st layer will change but the inner object will remain same (point in same place in memory)




