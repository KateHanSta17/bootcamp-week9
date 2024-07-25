// # 🐛 Implement Modules

// Work with a partner to resolve the following issue(s):

// * Users should be able to import and use the `basicmath.js` module to execute simple math operations.

// ## Expected Behavior

// * When I run `node index.js sum 3 4` in the command line, it should print out `7`

// * When I run `node index.js difference 3 4` in the command line, it should print out `-1`

// * When I run `node index.js product 3 4` in the command line, it should print out `12`

// * When I run `node index.js quotient 3 4` in the command line, it should print out `0.75`


// TODO: Import `basicmath.js`
const basicmath = require("./basicmath");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const numOne = 2;
const numTwo = 5;
const operation = "quotient";


// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
  case "sum":
    console.log(basicmath.sum(numOne, numTwo));
    break;
  case "difference":
    console.log(basicmath.difference(numOne, numTwo));
    break;
  case "product":
    console.log(basicmath.product(numOne, numTwo));
    break;
  case "quotient":
    console.log(basicmath.quotient(numOne, numTwo));
    break;
  default:
    console.log("Invalid operation!");
}
// and each `case` uses the corresponding `maths` method

// to perform each math operation on the two numbers, `numOne` and `numTwo`
