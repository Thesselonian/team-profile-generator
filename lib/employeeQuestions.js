const inquirer = require('inquirer');
const {Engineer, Intern} = require('./Classes');
const { generateBodyHTML } = require('./HTMLGenerator');

//prompt for what kind of employee the user would like to enter
const typeOfEmployee = (employees) => {
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
    //based on response from user the appropriate set of questions for the employee typed are returned
    .then(typeOfEmployee => {
        if(typeOfEmployee.addEmployeeType === 'engineer') {
           return promptEngineerQuestions(employees);
        } else if(typeOfEmployee.addEmployeeType === 'intern') {
           return promptInternQuestions(employees);
        } else {
          return employees
        }
    })

}

//engineer questions
const promptEngineerQuestions = (employees) => {
    if (!employees.engineers) {
        employees.engineers =[]
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
      engineer = new Engineer(engineerAnswers)
      employees.engineers.push(engineer)
      if (engineerAnswers.confirmAddEngineer) {
        return promptEngineerQuestions(employees)
    } else {
      //loop back to what type of employee the user would like to add, send employees object to build on. 
        return typeOfEmployee(employees);
    }
  })
}

const promptInternQuestions = (employees) => {
    if (!employees.interns) {
        employees.interns = []
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
            name: 'school',
            message: 'Enter the school for the intern.',
          },
          {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to enter another intern?',
            default: false
          }
    ])
    .then(internAnswers => {
      intern = new Intern(internAnswers)
      employees.interns.push(intern)
      if (internAnswers.confirmAddIntern) {
          return promptInternQuestions(employees)
      } else {
        //loop back to what type of employee the user would like to add, send employees object to build on. 
          return typeOfEmployee(employees);
      }
    })
}

module.exports = typeOfEmployee