const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('create Inern object with school property', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});