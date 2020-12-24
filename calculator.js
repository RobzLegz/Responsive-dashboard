console.log("Starting calculator!");

let numA = 12;
let numB = 9;

function calculatorSum() {
    let result = numA + numB;
    document.querySelector(".calculator").innerHTML = result;
}


/**
 * @contant The element which displays the result of the calculator.
 */
const calculatorResultElement = document.querySelector(".calculator .result");

/**
 * Mathetmatical operation to be performed by calculator.
 */
let calculatorOperation;

/**
 * The current calculator result.
 */
let calculatorResult;

/**
 * Implements the calculator functionality.
 * @param {string} operation Type of mathematical operation to use.
 */
function useCalculator(operation) {
    // 1. Receive the input (the number) from the result element.
    let input = parseInt(calculatorResultElement.value);
    console.log("User entered: " + input);

    // 2. Check operation
    if (operation !== "equals") {
        // 2.1 If the operation is not "equals" (it is add, subtract, etc):
        //     Record the current operation being used and also the input number (in variables)
        calculatorOperation = operation;
        calculatorResult = input;
    } else {
        // 2.2 Otherwise (it is equals), calculate the result using the old input, the new one
        //     and the previously selected operation
        if (calculatorOperation === "add")  {
            // if the operation was "add", then add both inputs and assign the new result to
            // calculatorResult variable.
            calculatorResult += input; // same as "calculatorResult = calculatorResult + input"
        } else if (calculatorOperation === "subtract") {
            // else if it is "subtract" then subtract the new input from the old one
            calculatorResult -= input;
        } else if (calculatorOperation === "multiply") {
            calculatorResult *= input;
        } else if (calculatorOperation === "divide") {
            calculatorResult /= input;
        }
    }
    // 3. Output the calculated result in the result element.
    calculatorResultElement.value = calculatorResult;
}

/**
 * Clears the calculator.
 */
function clearCalculator() {
    calculatorResultElement.value = 0;
    calculatorOperation = undefined;
    calculatorResult = 0;
}
