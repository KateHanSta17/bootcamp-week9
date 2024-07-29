const inquirer = require('inquirer');
const colors = require('colors');
const { json } = require('stream/consumers')
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: colors.brightMagenta (': What is your name?')
    },
    {
        type: 'checkbox',
        name: 'stack',
        message: colors.brightMagenta (': What languages do you know?'),
        choices: ['HTML', 'CSS', 'JavaScript', 'SQL', 'NoSQL', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Swift', 'Kotlin', 'Objective-C', 'PHP', 'Perl', 'Rust', 'Go', 'TypeScript', 'R', 'Scala', 'Haskell', 'Clojure', 'Groovy', 'Lua', 'Erlang', 'Dart', 'Julia', 'F#', 'Kotlin', 'Rust', 'Go', 'TypeScript', 'R', 'Scala', 'Haskell', 'Clojure', 'Groovy', 'Lua', 'Erlang', 'Dart', 'Julia', 'F#']
    },
    {
        type: 'list',
        name: 'communications',
        message: colors.brightMagenta (': What is your preferred method of communication?'),
        choices: ['phone', 'email', 'text'],
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log('Answers: ', answers);
    console.log('Name: ', answers.name);
    console.log('Languages: ', answers.languages);
    console.log('Communications: ', answers.communications);
    fs.writeFile('answers.json', JSON.stringify(answers, null, 4), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
);



