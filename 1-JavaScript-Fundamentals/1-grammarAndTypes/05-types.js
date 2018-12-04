// Booleans
// What is a boolean
var on = true;
console.log(on); //true

// boolean can represent: true/false yes no on off

// null = empty value (not 0 not undefined)

var empty = null;
console.log(empty) // null

var undef = undefined
console.log(undef) // undefined

let grass
console.log(grass) // undefined

// Numbers

var degrees = 90
console.log(degrees)

var precise = 999999999999999
console.log(precise)

var rounded = 9999999999999999
console.log(rounded)

var notQuite = 0.2 + 0.1
console.log(notQuite)

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard) // 0.3

// Numbers vs Strings

let first = 1050 + 100
let second = '1050' + 100

console.log(first)
console.log(second)
console.log(typeof first)
console.log(typeof second)

/* addition vs concatenation

when JS sees combining two or more numbers, it adds the values using the built in math functionality
when it sees adding together one or more strings it changes and the plus sign becomes and 
assignment operator--it smashes the values together without trying to synthetisize the values */

let third = 1050 + '100'

console.log(third)
console.log(typeof third)





var firstName = 'Juan'
var lastName = 'Medina,'
var houseNumber = 9
var street = 'Municipal Dr. Apt'
var aptNumber = 223
var city = 'Fishers,'
var state = 'Indiana,'
var zipcode = 46038

console.log(firstName, lastName)
console.log(houseNumber, street, aptNumber)
console.log(city, state, zipcode)

console.log(`${firstName} , \n${lastName}`);

// Objects

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};
console.log(burritosNow)
console.log(typeof burritosNow) //object

/* Arrays are great for lists

Denoted by []

has values ('blues', 'green') separatated with commas */

var burritos = ['large', 4, true];
console.log(burritos)

console.log(typeof burritos);















