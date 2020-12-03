function internTemplate(data) {
    if(!data) {
        return '';
    }
    return `
            <div class="card">
                <div class="card-head">
                    <h3>${data.internName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.internId}</li>
                        <li>Email: <a href="mailto: ${data.internEmail}" target="none">${data.internEmail}</a></li>
                        <li>School: ${data.internSchool}</li>
                    </ul>
                </div>
            </div>
        `
}

function engineerTemplate(data) {
    if(!data) {
        return '';
    }

    return `
            <div class="card">
                <div class="card-head">
                    <h3>${data.engineerName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.engineerId}</li>
                        <li>Email: <a href="mailto: ${data.engineerEmail}" target="none">${data.engineerEmail}</a></li>
                        <li>Github: <a href="https://github.com/${data.engineerGithub}" target="none">${data.engineerGithub}</a></li>
                    </ul>
                </div>
            </div>
            `
}

module.exports = data => {

    const { intern, engineer, manager } = data;

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
            ${internTemplate(intern)}
            ${engineerTemplate(engineer)}
        </body>
    </main>
</body>
</html>
        `      
} 