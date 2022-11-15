const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const team = [];


function main () {
    createManager()
}

function createManager() {
    console.log('Let\'s start building your team');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager name?',

        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manger\'s  id?',

        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manger\'s  email?',
            
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the manger\'s  office number?',
            
        },
    ])
    .then(answers => {
        const { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
        const manager = new Manager(
            managerName,
            managerEmail,
            managerId,
            managerOfficeNumber,
        )
    })
}

main();