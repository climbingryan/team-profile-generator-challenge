const Engineer = require('../lib/Engineer');

test('get github username', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github username from getGithub method', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(String));
});