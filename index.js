const promptUser = require('./lib/questions')

promptUser()
.then((answers) => {
    console.log(answers);
})