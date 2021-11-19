const promptManagerQuestions = require('./lib/managerQuestions')
const typeOfEmployee = require('./lib/employeeQuestions')
const { generateBodyHTML, writeHTML } = require('./lib/HTMLGenerator')

promptManagerQuestions()
.then(typeOfEmployee)
.then(generateBodyHTML)
.then(writeHTML);