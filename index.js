// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadme = require('.utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter a title for this project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of this project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for this project:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please discribe usage information needed for this project:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please add any contributors for this project:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please describe any tests for this project:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name:'github',
    },
    {
        type:'input',
        message:'Please enter your email:',
        name:'email',
    },
    {
        type:'',
        message:'Please choose a license type:',
        name:'license',
    },
])
.then((data) => {
    fs.writeFile('test.md', createReadMe(data), (error) => {
        if (error) return console.log(error);
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();