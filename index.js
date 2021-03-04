// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please discribe usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please discribe contribution guidelines',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please descripe test instructions',
        name: 'testing',
    },

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();