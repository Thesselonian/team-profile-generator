const promptManagerQuestions = require('./lib/managerQuestions')
const typeOfEmployee = require('./lib/employeeQuestions')
const generateBodyHTML = require('./lib/HTMLGenerator')

promptManagerQuestions()
.then(typeOfEmployee)
.then(generateBodyHTML)