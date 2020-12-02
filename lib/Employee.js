class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 2 + 5);
        this.email = email
    };

    // returns Employees name
    getName() {
        return this.name;
    }
};
module.exports = Employee;
