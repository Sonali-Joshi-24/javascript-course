"use strict";

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - What is tempreature amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temp?
// - What's a sensor error ? And what to do?

// 2) Breaking up into smaller sub-problems
// - How to ignore errors?
// - Find max values in temp array
// - Find min values in temp array
// - substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const currTemp = temps[i]

        if (typeof currTemp !== 'number') continue

        if (currTemp > max) max = currTemp
        if (currTemp < min) min = currTemp
    }
    console.log(max, min)
    return max - min
}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)




// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) understanding the problem
// - with 2 arrays, should we implement the functionality twice? NO! just merge 2 arrays in the begining

// 2) Breaking up into sub-problem
// - how to merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2)
    console.log(temps)


    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const currTemp = temps[i]

        if (typeof currTemp !== 'number') continue

        if (currTemp > max) max = currTemp
        if (currTemp < min) min = currTemp
    }
    console.log(max, min)
    return max - min
}

const amplitudeNew = calcTempAmplitudeNew([3,9,1], [5,4,2])
console.log(amplitudeNew)
///////////////////////////////////////
*/

/*
///////////////////////////////////////
// Debugging with the Console and Breakpoint

const measureKelvin = function() {
    const measurement = {
        type : 'temp',
        unit : 'celcius',
        // C) FIX
        value : Number(prompt('Degree Celcius: '))
    }
    // B) FIND
    console.table(measurement) // view obj in a nice format

    // console.log(measurement.value)
    // console.warn(measurement.value)
    // console.error(measurement.value)

    const kelvin = measurement.value + 273
    return kelvin
}
// A) IDENTIFY
console.log(measureKelvin())

/////////////////////////////////////////
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding problem
// - Array is transformed to string
// - What is the x days ? Ans:  length(array) + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17,21,23]
const data2 = [12,5,-5,0,4]

console.log(`...${data1[0]}ºC...${data1[1]}ºC...${data1[2]}ºC`)

const printTemp = function(data){
    let str = ''
    for(let i = 0; i < data.length; i++){
        str += `${data[i]}ºC in ${i} days...` 
    }
    console.log('...'+str)
}
printTemp(data1)

///////////////////////////////////////
