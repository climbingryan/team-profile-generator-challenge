const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github = '') {
        super();
        this.github = github;
    }
}

module.exports = Engineer;