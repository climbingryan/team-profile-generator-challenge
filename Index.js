const inquirer = require('inquirer');

const generateTemplate = require('./src/generateTemplate');
const { writeFile, copyFile } = require('./src/writePage');

function Start() {
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
            },
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another employee?',
                default: true
            },
            {
                type: 'input',
                name: 'add',
                message: 'Are you sure?',
                when: ({confirmAdd}) => {
                    if (confirmAdd) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            }
        ]).then(data => {
            if (data.confirmAdd) {
                return addPeople()
            } else {
                return data;
            }
        })
}
function addPeople() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'chooseEmployeeType',
            message: 'What kind of employee would you like to add?',
            choices: ['Intern', 'Engineer'],
        }
    ]).then(data => {
        if (data.chooseEmployeeType === 'Intern') {
            return intern();
        } else {
            return engineer();
        }
    })
}

function intern() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: 'what is the name of this intern?'
        },
        {
            type: 'number',
            name: 'internId',
            message: 'what is the interns id?'
        },
        {
            type: 'text',
            name: 'internEmail',
            message: 'What is the interns email?'
        },
        {
            type: 'text',
            name: 'internSchool',
            message: 'What school does the intern attend?'
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another employee?'
        }
    ]).then(data => {
        if (data.addAnother) {
            return addPeople();
        } else {
            return data;
        }
    });
}

function engineer() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'engineername',
            message: 'What is the engineers name?'
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is the engineers id?'
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: 'What is the engineers email?'
        },
        {
            type: 'text',
            name: 'engineerGithub',
            message: 'What is the engineers github?'
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another employee?'
        }
            
     ])//.then(data => {

     //}) // If confirm add true restart
    .then(data => {
        if (data.addAnother) {
            return addPeople()
        } else {
            return data;
        }
    })
}

function init() {
    Start()
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