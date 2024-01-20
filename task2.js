const scores=[91,89,95,98,99]
//array
const [firstScore, secondScore]=scores
console.log("first score:",firstScore)
console.log("second score:",secondScore)

//object
const student={
    name:"Deniz",
    age:20,
    isEnrolled:true
}

const {name,age}=student
console.log("name:",name);
console.log("age:",age);

//typeof
console.log("Type of firstScore:", typeof firstScore);
console.log("Type of secondScore:", typeof secondScore);
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("array length:",scores.length);

//operators
const sum=firstScore+secondScore
const diff=firstScore-secondScore
console.log("sum:",sum,"\ndifference:",diff)
console.log("Greater than",firstScore>secondScore);
console.log("Less than",firstScore<secondScore);

console.log("Logical operation (true):", firstScore>=0 && (secondScore%2!=0||age<secondScore) );
console.log("Not enrolled:",!student.isEnrolled);