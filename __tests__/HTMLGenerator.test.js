const { expect } = require('@jest/globals');
const {generateManagerHTML, generateEngineerHTML, generateInternHTML } = require('../lib/HTMLGenerator');

test('a div is created for manager information', () => {
    const managerObject = 
    {
        name: 'eric',
        ID: '3',
        email: 'ericyoung111@gmail.com',
        officeNumber: '123'
    };
    const result = generateManagerHTML(managerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <a href="mailto:ericyoung111@gmail.com">Email: ericyoung111@gmail.com</a>
                <p class="card-text">Office Number: 123</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for engineer information', () => {
    const engineerObject = 
    {
        name: 'eric',
        ID: '3',
        email: 'ericyoung111@gmail.com',
        github: 'Thesselonian'
    };
    const result = generateEngineerHTML(engineerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <a href="mailto:ericyoung111@gmail.com">Email: ericyoung111@gmail.com</a>
                <a href="https://github.com/Thesselonian">Thesselonian</a>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for intern information', () => {
    const internObject = 
    {
        name: 'eric',
        ID: '3',
        email: 'ericyoung111@gmail.com',
        school: 'Weber State'
    };
    const result = generateInternHTML(internObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: eric</h5>
                <p class="card-text">Employee ID: 3</p>
                <a href="mailto:ericyoung111@gmail.com">Email: ericyoung111@gmail.com</a>
                <p class="card-text">University: Weber State</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});