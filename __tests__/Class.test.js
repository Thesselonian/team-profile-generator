const { expect } = require('@jest/globals');
const { Intern, Engineer } = require('../lib/Classes');

test('Engineer class returns an object with properties', () => {
    const mockEngineerAnswers = {
        name: "eric",
        ID: "123",
        email: "spamcount13@gmail.com",
        github: "thesselonian",
    }
    const engineerObject = new Engineer(mockEngineerAnswers)
    expect(engineerObject.name).toEqual("eric");
    expect(engineerObject.ID).toEqual("123");
    expect(engineerObject.email).toEqual("spamcount13@gmail.com")
    expect(engineerObject.github).toEqual("thesselonian")
});

test('intern class returns an object with properties', () => {
    const mockInternAnswers = {
        name: "bob",
        ID: "432",
        email: "example@gmail.com",
        school: "weber state",
    }
    const internObject = new Intern(mockInternAnswers)
    expect(internObject.name).toEqual("bob");
    expect(internObject.ID).toEqual("432");
    expect(internObject.email).toEqual("example@gmail.com")
    expect(internObject.school).toEqual("weber state")
});