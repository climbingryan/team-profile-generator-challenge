const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
            }
        ]);
}
function addPeople() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'chooseEmployeeType',
            message: 'What kind of employee would you like to add?',
            choices: ['Intern', 'Engineer'],
        },
        {
            when: choices => {
                if (choices.chooseEmployeeType === 'Intern') {
                    return inquirer.prompt([
                        {
                            type: 'text',
                            name: 'internName',
                            message: 'what is the name of this intern?'
                        },
                        {
                            type: 'number',
                            name: 'internId',
                            message: 'what is the interns id?/'
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
                        }
                    ]);
                } 
            }
        }
    ])
}

// function intern() {
//     return inquirer.prompt([
//         {
//             type: 'text',
//             name: 'internName',
//             message: 'what is the name of this intern?'
//         },
//         {
//             type: 'number',
//             name: 'internId',
//             message: 'what is the interns id?/'
//         },
//         {
//             type: 'text',
//             name: 'internEmail',
//             message: 'What is the interns email?'
//         },
//         {
//             type: 'text',
//             name: 'internSchool',
//             message: 'What school does the intern attend?'
//         }
//     ])
// }
 

function init() {
    Start()
        .then(addPeople)
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