const fs = require ('fs')

function generateManagerHTML (managerAnswers) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager: ${managerAnswers.managerName}</h5>
                <p class="card-text">Employee ID: ${managerAnswers.managerID}</p>
                <p class="card-text">Email: ${managerAnswers.managerEmail}</p>
                <p class="card-text">Office Number: ${managerAnswers.managerOfficeNumber}</p>
            </div>
        </div>
    `
}

//function is called looping over an array containing objects for each engineer
function generateEngineerHTML (engineerAnswers) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: ${engineerAnswers.engineerName}</h5>
                <p class="card-text">Employee ID: ${engineerAnswers.engineerID}</p>
                <p class="card-text">Email: ${engineerAnswers.engineerEmail}</p>
                <p class="card-text">GitHub: ${engineerAnswers.engineerGitHub}</p>
            </div>
        </div>
    `
}

function generateInternHTML (internAnswers) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: ${internAnswers.internName}</h5>
                <p class="card-text">Employee ID: ${internAnswers.internID}</p>
                <p class="card-text">Email: ${internAnswers.internEmail}</p>
                <p class="card-text">University: ${internAnswers.internUniversity}</p>
            </div>
        </div>
    `
}

function generateBodyHTML (managerAnswers, engineersAnswers, internsAnswers){
    const managerHTML = generateManagerHTML(managerAnswers);
    let engineersHTML = [];
    for (i=0; i<engineersAnswers.length; i++) {
        engineersHTML.push(generateEngineerHTML(engineersAnswers[i]));
    }
        

}

module.exports = {generateManagerHTML, generateEngineerHTML, generateInternHTML}