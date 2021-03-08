// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadme = require('./utils/generateMarkdown');
const licenses = require('./utils/constants')

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
        message: 'Please describe usage information needed for this project:',
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
        type:'list',
        message:'Please choose a license type:',
        name:'license',
        choices: Object.keys(licenses).map((key)=>key)
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
])
// TODO: Create a function to write README file
.then((data) => {
    fs.writeFile('./test/README.md', createReadme(data), (error) => {
        if (error) console.log(error);
    })
});
