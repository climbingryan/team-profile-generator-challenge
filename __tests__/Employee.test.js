const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('kevkev');

    expect(employee.name).toBe('kevkev');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toBe('');
});

test("get employee's name", () => {
    const employee = new Employee('kevkev');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const employee = new Employee('kevkev');

    expect(employee.getId()).toEqual(expect.any(String));
});