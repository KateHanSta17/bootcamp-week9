const inquirer = require('inquirer');
const colors = require('colors');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text would you like to log?',
            name: 'text',
        },
        {
            type: 'list',
            message: 'What color would you like to use?',
            name: 'colors',
            choices: ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'],
        },
        {
            type: 'number',
            message: 'How many times would you like to log the text?',
            name: 'number',
        }
    ])
    .then((response) => {
        for (let i = 0; i < response.number; i++) {
            console.log(response.text[response.colors]);    
        }
    });
