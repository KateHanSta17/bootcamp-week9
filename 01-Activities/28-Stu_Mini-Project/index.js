const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio about yourself.',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Link us to your LinkedIn profile',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
])
.then((response) => {
    fs.writeFile("index.html",null, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Success!");
        }
    }
    )
});
const generateHTML = ({ name, location, bio, linkedin, github }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <header class="p-5 mb-4 header bg-light">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${name}</h1>
            <p class="lead">I am
                from ${location}.</p>
            <p class="lead">Bio: ${bio}</p>
            <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group
                    -item">My GitHub username is ${github}</li>
                <li class="list-group
                    -item">LinkedIn: ${linkedin}</li>
                    
            </ul>
        </div>
    </header>
</body>
</html>`;
const html = generateHTML(response);

fs.writeFile('index.html', html, (err) =>
err ? console.log(err) : console.log('Success!')
);
