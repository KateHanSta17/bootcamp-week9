// # 🏗️ Implement `process.argv`

// Work with a partner to implement the following user story:

// * As a developer, I want to use command-line arguments as input when writing Node.js applications.

// ## Acceptance Criteria

// * It's done when I have created a file, `index.js`, in the working directory.

// * It's done when I use `process.argv` to assign two arguments to variables.

// * It's done when I compare those two variables to see whether they are the same or not.

// * It's done if the program logs `true` to the console when the values are the same and `false` if they are not.

const a = process.argv[2];
const b = process.argv[3];

// conditional statement
if (a === b) {
    console.log("true");
} else {
    console.log("false");
}
console.log(process.argv);

// ternary operator
console.log(a === b ? true : false);

// 
console.log(a === b);

// 
console.log(process.argv[2] === process.argv[3]);

// What is the purpose of the `process.argv` property?
// process.argv is an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. 
// The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.

// * What is the difference between `===` and `==` when comparing two values in JavaScript?
// The === operator is strict comparison operator in JavaScript, which returns false for the values which are not of a similar type.