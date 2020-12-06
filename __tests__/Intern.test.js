const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('create Inern object with school property', () => {
    const intern = new Intern('kevkev', 'email', '76', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

test('get value of school', () => {
    const intern = new Intern('kevkev', 'email', '76', 'UT');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get role of intern', () => {
    const intern = new Intern('kevkev', 'email', '76', 'UT');

    expect(intern.getRole()).toEqual(expect.stringContaining('intern'));
})