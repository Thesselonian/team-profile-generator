const { expect } = require('@jest/globals');
const {generateManagerHTML, generateEngineerHTML, generateInternHTML } = require('../lib/HTMLGenerator');

test('a div is created for manager information', () => {
    const managerObject = 
    {
        managerName: 'eric',
        managerID: '3',
        managerEmail: 'ericyoung111@gmail.com',
        managerOfficeNumber: '123'
    };
    const result = generateManagerHTML(managerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <p class="card-text">Email: ericyoung111@gmail.com</p>
                <p class="card-text">Office Number: 123</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for engineer information', () => {
    const engineerObject = 
    {
        engineerName: 'eric',
        engineerID: '3',
        engineerEmail: 'ericyoung111@gmail.com',
        engineerGitHub: 'Thesselonian'
    };
    const result = generateEngineerHTML(engineerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <p class="card-text">Email: ericyoung111@gmail.com</p>
                <p class="card-text">GitHub: Thesselonian</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for intern information', () => {
    const internObject = 
    {
        internName: 'eric',
        internID: '3',
        internEmail: 'ericyoung111@gmail.com',
        internUniversity: 'Weber State'
    };
    const result = generateInternHTML(internObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <p class="card-text">Email: ericyoung111@gmail.com</p>
                <p class="card-text">University: Weber State</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});