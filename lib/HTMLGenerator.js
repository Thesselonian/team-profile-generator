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
    let managerHTML = generateManagerHTML(manager);
    managerHTML = managerHTML.toString();
    if(employees.engineers) {
        for (i=0; i<employees.engineers.length; i++) {
            engineersHTML.push(generateEngineerHTML(employees.engineers[i]));
        }
        engineersHTML = engineersHTML.toString();
    }
    if(employees.interns) {
        for (i=0; i<employees.interns.length; i++) {
            internsHTML.push(generateInternHTML(employees.interns[i]));
        }
        internsHTML = internsHTML.toString();
    }
    let bodyHTML = 
    `
${managerHTML}
${engineersHTML}
${internsHTML}
    `;
    return bodyHTML;
}

//writes HTML to an html document
function writeHTML (bodyHTML){
    console.log(bodyHTML)
    fs.writeFile(
    './dist/team.html', 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <header>
    </header>
    <main>
        ${bodyHTML}
    </main>
</body>
</html>
    `,
    err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

module.exports = { generateBodyHTML, writeHTML }