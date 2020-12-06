class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    };

    // returns Employees name
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'employee';
    }
};
module.exports = Employee;
