// Importing packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array containing questions for inquirer
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'list',
        message: 'Which license is your project using?',
        name: 'licensing',
        choices: ['APACHE 2.0', 'BSD 3', 'GNU GPL', 'MIT', 'None'],
    },
    {
        type: 'input',
        message: 'What usage information does the user need to know about this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What command will be used to run tests for this project?',
        name: 'test',
        default: "npm run test",
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Lastly, please enter your email address.',
        name: 'email',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    const project = fileName;

    return fs.writeFileSync(project, JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log('Created successfully'));
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('README.md', generateMarkdown({res}));
    });
}

// Function call to initialize app
init();
