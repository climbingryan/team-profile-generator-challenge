

function generateTemplate(data) {
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
                    <h3>${data.teamManagerName}</h3>
                    <h4>Role: </h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.employeeId}</li>
                        <li>Email: <a href="mailto: ${data.managerEmailAddress}" target="none">${data.managerEmailAddress}</a></li>
                        <li>Office number: ${data.officeNumber}</li>
                    </ul>
                </div>
            </div>

        </body>
    </main>
</body>
</html>
        `      
}
module.exports = generateTemplate;