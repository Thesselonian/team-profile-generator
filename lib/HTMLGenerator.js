const fs = require ('fs')

//function for generating manager HTML
function generateManagerHTML (manager) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager: ${manager.name}</h5>
                <p class="card-text">Employee ID: ${manager.ID}</p>
                <p class="card-text">Email: ${manager.email}</p>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `
}

//function is called looping over an array containing objects for each engineer
function generateEngineerHTML (engineer) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: ${engineer.name}</h5>
                <p class="card-text">Employee ID: ${engineer.ID}</p>
                <p class="card-text">Email: ${engineer.email}</p>
                <p class="card-text">GitHub: ${engineer.github}</p>
            </div>
        </div>
    `
}

function generateInternHTML (intern) {
    console.log(intern);
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: ${intern.name}</h5>
                <p class="card-text">Employee ID: ${intern.ID}</p>
                <p class="card-text">Email: ${intern.email}</p>
                <p class="card-text">University: ${intern.school}</p>
            </div>
        </div>
    `
}

function generateBodyHTML (employees){
    let engineersHTML = []
    let internsHTML = []
    const managerHTML = generateManagerHTML(manager);
    for (i=0; i<employees.engineers.length; i++) {
        engineersHTML.push(generateEngineerHTML(employees.engineers[i]));
    }
    for (i=0; i<employees.interns.length; i++) {
        internsHTML.push(generateInternHTML(employees.interns[i]));
    }
    return {engineersHTML, internsHTML, managerHTML}
}

module.exports = generateBodyHTML