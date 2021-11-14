const inquirer = require('inquirer');

const typeOfEmployee = (answers) => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'addEmployeeType',
            Message: 'What type of employee would you like to add?',
            choices: [
                'engineer',
                'intern',
                'finished',
            ]
        }
    )
    .then(typeOfEmployee => {
        console.log(typeOfEmployee)
        if(typeOfEmployee.addEmployeeType === 'engineer') {
           return promptEngineerQuestions(answers);
        } else if(typeOfEmployee.addEmployeeType === 'intern') {
           return promptInternQuestions(answers);
        } 
    })

}

// const engineerEntryPrompt = (answers) => {
//     return inquirer.prompt(
//         {
//             type: 'confirm',
//             name: 'confirmEngineerEntry',
//             message: 'Would you like to add an engineer?',
//             default: true
//         }
//     )
//     .then(engineerAdd => {
//         if(engineerAdd) {
//             return promptEngineerQuestions(answers)
//         } else {
//             return answers
//         }

//     })
// }

const promptEngineerQuestions = (answers) => {
    if (!answers.engineers) {
        answers.engineers =[]
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a name for the engineer!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'ID',
            message: 'Enter the ID number for the engineer.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter the email address for the engineer.',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter the github profile name for the engineer.',
          },
          {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Would you like to enter another engineer?',
            default: false
          }
    ])
    .then(engineerAnswers => {
        answers.engineers.push(engineerAnswers)
        console.log(answers);
        if (engineerAnswers.confirmAddEngineer) {
            return promptEngineerQuestions(answers)
        } else {
            return typeOfEmployee(answers);
        }
    })
}

const promptInternQuestions = (answers) => {
    if (!answers.interns) {
        answers.interns =[]
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a name for the intern!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'ID',
            message: 'Enter the ID number for the intern.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter the email address for the intern.',
          },
          {
            type: 'input',
            name: 'university',
            message: 'Enter the university for the intern.',
          },
          {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to enter another intern?',
            default: false
          }
    ])
    .then(internAnswers => {
        answers.interns.push(internAnswers)
        console.log(answers);
        if (internAnswers.confirmAddIntern) {
            return promptInternQuestions(answers)
        } else {
            return typeOfEmployee(answers);
        }
    })
}

module.exports = typeOfEmployee