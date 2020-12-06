const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('get office number', () => {
    const manager = new Manager('kevkev', 'email', '67', '90');
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test('get role for Manager', () => {
    const manager = new Manager('kevkev', 'email', '67', '90');

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'));
})