const inquirer = require('inquirer');

const promptManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the name of the team manager (required)',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter the ID of the team manager (required)',
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log('Please enter the ID of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the email address of the team manager',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter the ID of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter the office number of the team manager',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter the ID of the team manager!');
                    return false;
                }
            }
        },
    ])
}

module.exports = promptManagerQuestions
