const Engineer = require('../lib/Engineer');

test('get github username', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});