const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github = '') {
        super();
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'engineer';
    }
}

module.exports = Engineer;