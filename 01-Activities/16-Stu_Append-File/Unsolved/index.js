// TODO: What are we importing?
const fs = require('fs');
// we are importing the fs module to allow us to work with the file system

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument is the file path to the file we want to append to 
// The second argument is the data we want to append to the file
// The third argument is a callback function that will be called after the file has been written to
// where do the arguments come from? 
// The arguments come from the command line when the user runs the file in the terminal.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
// The ternary operator is a shorthand for an if else statement. If there is an error it will console log the error, 
// if there is no error it will console log 'Commit logged!'
  err ? console.error(err) : console.log('Commit logged!')
);
