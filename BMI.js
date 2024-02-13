/* Write your code below. Good luck! 🙂 */
// BMI = mass / (height * height);

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI: " + BMIMark)
console.log("John's BMI: " + BMIJohn)

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)
