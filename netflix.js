//arrays - variables that hold multiple values strings numbers boolean
//null undefined symbol
const numbers = ['1,2,3,4,5,6,7,8,9'];
numbers.push('12');
// template string
const name ='mark';
console.log('My name is ${name}');
console.log(numbers);

// var is globally scooped while const and let is block scooped
//type coersion
console.log("7"- 32);

//type conversion
console.log(Number("7") + 32);

//types of console logs
console.log()
console.warn()
console.error()

//arrays
let people = ["Dan", "John","Naphtali"]
people.push("des")
console.log(people
)

let digits = [1,2,3,4,5,6,7,8,9]
let array= digits.filter((number)=> number % 2 === 0 )
let y = digits.reduce((acc,number)=> acc + number ,0)
console.log(array)
