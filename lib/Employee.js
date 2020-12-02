class Employee {
    constructor(name = '', email = '', id = '') {
        this.name = name;
        this.id = id;
        this.email = email
    };

    // returns Employees name
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }

};
module.exports = Employee;
