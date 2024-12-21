let num1=Number(prompt("Enter the first number"));
let num2=Number(prompt("Enter the second number"));
let sum=num1+num2;
let sub=num1-num2;
let mult=num1*num2;
let div=num1/num2;
let modules=num1%num2;
console.log(`the result ofn ${num1} + ${num2} is ${sum}`);
console.log(`the result of  ${num1} - ${num2} is ${sub} `);
console.log(`the result of  ${num1} * ${num2} is ${mult}`);
console.log(`the result of  ${num1} / ${num2} is ${div}`);
console.log(`the result of  ${num1} % ${num2} is ${modules}`);
console.log("*****************************************")

// **************************************Q2*********************
let length=Number(prompt("Enter the length"));
let width=Number(prompt("Enter the width"));

let area= length*width;
console.log(`the area of the rectangle is ${area}`)
console.log("*****************************************")

// *****************************************Q3**********************
let radius=Number(prompt("enter the radius of a circle"));

console.log("Diameter is " + 2*radius);
console.log("Circumference is" +(2 * 3.14 * radius).toFixed(2));//62.80
// console.log("Circumference is" +(2 * 3.14 * radius+0.17).toFixed(2))//62.97
console.log("the Area is :"+3.14*(radius*radius))
