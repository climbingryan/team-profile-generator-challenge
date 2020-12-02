const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school = '') {
        super();
        this.school = school;
    };
}
module.exports = Intern;