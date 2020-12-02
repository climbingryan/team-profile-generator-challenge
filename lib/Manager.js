const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber = '') {
        super();
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
};
module.exports = Manager;