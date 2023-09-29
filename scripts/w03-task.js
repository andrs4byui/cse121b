/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    let sum = number1 + number2;
    return sum;
}
function addNumbers(){
    let numberOne = Number(document.querySelector("#add1").value);
    let numberTwo = Number(document.querySelector("#add2").value);
    let sum = add(numberOne, numberTwo);
    document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const substract = function(number1, number2) {
    return number1 - number2;
}

const substracNumbers = function(){
    let numberOne = Number(document.getElementById("subtract1").value);
    let numberTwo = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = substract(numberOne, numberTwo);
}
document.getElementById("subtractNumbers").addEventListener("click", substracNumbers);
/* Arrow Function - Multiply Numbers */

const multiply = (f1, f2) => f1 * f2;
const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(factor1, factor2);
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = function(number1, number2) {
    return number1 / number2;
}
const divideNumbers = function(){
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
    console.log(document.getElementById("quotient").value)
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let date = new Date();
let year;
year = date.getFullYear();
document.getElementById("year").innerHTML= year;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML= numbersArray;
/* Output Source Array */
numbersArray.filter(numbersArray)
function isOdd(num){
    if (num % 2 == 0){
        return num
    }
    return num;
}
/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
