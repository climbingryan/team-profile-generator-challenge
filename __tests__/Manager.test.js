const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('get office number', () => {
    const manager = new Manager();
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test('get role for Manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'));
})