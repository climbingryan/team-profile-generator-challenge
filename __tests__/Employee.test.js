const Employee = require('../lib/Employee.js');

test('creates a Employee object', () => {
    const employee = new Employee('kevkev', 'email', '98');

    expect(employee.name).toBe('kevkev');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("get employee's name", () => {
    const employee = new Employee('kevkev', 'email', '98');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const employee = new Employee('kevkev', 'email', '98');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('get employee email', () => {
    const employee = new Employee('kevkev', 'email', '98');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new Employee('kevkev', 'email', '98');

    expect(employee.getRole()).toBe('employee');
});