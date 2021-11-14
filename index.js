const promptManagerQuestions = require('./lib/managerQuestions')
const typeOfEmployee = require('./lib/employeeQuestions')

promptManagerQuestions()
.then(typeOfEmployee)