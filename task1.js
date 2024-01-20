const numbers=[10,20,30,40,50]

//destructuring
const [firstNumber, secondNumber]=numbers
console.log("first number:",firstNumber)
console.log("second number:",secondNumber)
console.log("length of the array:",numbers.length)

//typeof
const myString="abc"
const myNumber=23
const myBoolean=true

console.log("Type of myString:", typeof myString);
console.log("Type of myNumber:", typeof myNumber);
console.log("Type of myBoolean:", typeof myBoolean);

//operators
const sum=firstNumber+secondNumber
const diff=firstNumber-secondNumber
const product=firstNumber*secondNumber
const quotient=firstNumber/secondNumber
const rem=firstNumber%secondNumber

console.log("\nArithmetic Operators:");

console.log("sum:",sum,"\ndifference:",diff,"\nproduct:",product,"\nquotient:",quotient,"\nrem:",rem);

console.log("\nComparison Operators:");

console.log("Equal:", firstNumber == secondNumber);
console.log("Equal (strict):", firstNumber === secondNumber);
console.log("Not Equal:", firstNumber != secondNumber);
console.log("Not Equal (strict):", firstNumber !== secondNumber);
console.log("Less Than:", firstNumber < secondNumber);
console.log("Greater Than:", firstNumber > secondNumber);
console.log("Less Than or Equal:", firstNumber <= secondNumber);
console.log("Greater Than or Equal:", firstNumber >= secondNumber);


//logical operators
console.log("\nLogical Operators:");

console.log("Even and Positive:", firstNumber % 2 == 0 && firstNumber > 0);
console.log("Even or Positive:", firstNumber % 2 == 0 || firstNumber > 0);

const notNegative=(firstNumber >= 0)
console.log("Not negative:", notNegative);
//console.log("negative:", !notNegative);
