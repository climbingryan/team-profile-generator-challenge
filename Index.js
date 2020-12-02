const inquirer = require('inquirer');


const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTemplate = require('./src/generateTemplate');
const { writeFile, copyFile } = require('./src/writePage');

const start = () => {
    return inquirer.prompt([
            {
                type: 'text',
                name: 'teamManagerName',
                message: 'What is the name the team manager?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'employeeId',
                message: 'What is your employee id?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter a number.');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'managerEmailAddress',
                message: 'What is your email address',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log('Please enter an email');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'What is your office number?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]);
}


function init() {
    start()
        .then(questionData => {
            return generateTemplate(questionData);
        })
        .then(writePage => {
            return writeFile(writePage);
        })
        .then(response => {
            console.log(response);
            return copyFile();
        })
}

init();