// # 📖 File System Read & Write
// Work with a partner to implement the following user story:
// * As a developer, I want to create a log file that tracks the execution of code in my application.
// ## Acceptance Criteria
// * It's done when I have completed the `writeToLog` function such that it takes an input and writes the input to a new `log.txt` file.
// * It's done when I have proper validation that checks whether the correct amount of inputs has been passed in using `process.argv`.


// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Complete the `writeToLog` function such that it will take in data and use it to write to a file called `log.txt`.
const writeToLog = (data) => {
fs.writeFile ('log.txt', data, (error, data) => {
    error ? console.error(error) : console.log(data);
    console.log('The log.txt file has been saved');
});
}

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) =>{
    let message; 
    
    // This conditional validates whether the correct amount of inputs have been provided
    if (y === undefined) {
        // TODO: Set the `message` variable to a string that explains that an incorrect number of arguments have been passed in.
        message = 'An incorrect number of arguments have been passed in';
        // TODO: Call the `writeToLog` function and pass in the `message` as an argument.
        writeToLog(message);
     
    } else {
        let num1 = parseInt(x)
        let num2 = parseInt(y)
        // TODO: Set the `message` variable to the `num1` and num2`
        message = num1 + num2;
        // TODO: Call the `writeToLog` function and pass in the `message` as an argument.
        writeToLog(message);
    }
}


// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);
