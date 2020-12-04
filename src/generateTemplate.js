function internTemplate(intern) {
    if(!intern) {
        return '';
    }
    return `
            <div class="card">
                <div class="card-head">
                    <h3>${intern.internName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${intern.internId}</li>
                        <li>Email: <a href="mailto: ${intern.internEmail}" target="none">${intern.internEmail}</a></li>
                        <li>School: ${intern.internSchool}</li>
                    </ul>
                </div>
            </div>
        `
}

function engineerTemplate(engineer) {
    if(!engineer) {
        return '';
    }

    return `
            <div class="card">
                <div class="card-head">
                    <h3>${engineer.engineerName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${engineer.engineerId}</li>
                        <li>Email: <a href="mailto: ${engineer.engineerEmail}" target="none">${engineer.engineerEmail}</a></li>
                        <li>Github: <a href="https://github.com/${engineer.engineerGithub}" target="none">${engineer.engineerGithub}</a></li>
                    </ul>
                </div>
            </div>
            `
}

module.exports = data => {
    console.log(data);
    const [ manager, role ] = data;

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <main>
        <nav>
            <h1>My Team</h1>
        </nav>

        <body>
            <div class="card">
                <div class="card-head">
                    <h3>${manager.teamManagerName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${manager.employeeId}</li>
                        <li>Email: <a href="mailto: ${manager.managerEmailAddress}" target="none">${manager.managerEmailAddress}</a></li>
                        <li>Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
            ${internTemplate(role)}
            ${engineerTemplate(role)}
        </body>
    </main>
</body>
</html>
        `      
} 