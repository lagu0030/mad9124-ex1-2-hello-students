'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1


// Start of Code:


const say = message => console.log(message)
const students = require('./students.json')


students.forEach(({firstName}) => say(`Hello ${firstName}`))

let lastnamed = students.filter((students) => students.lastName.startsWith('D'));

console.log(`Count of last names starting with D is ${lastnamed.length}`)
