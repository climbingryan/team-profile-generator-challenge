const Engineer = require('../lib/Engineer');

test('get github username', () => {
    const engineer = new Engineer('kevkev', 'email', '76', 'shawn');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github username from getGithub method', () => {
    const engineer = new Engineer('kevkev', 'email', '76', 'shawn');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get role of an engineer', () => {
    const engineer = new Engineer('kevkev', 'email', '76', 'shawn');

    expect(engineer.getRole()).toEqual(expect.stringContaining('engineer'));
})