const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// --- OUR CODE STARTS HERE ---

let userList = []
let userId = 1

async function main() {
    // get the project info and number of people to include
    const managerInfo = await inquirer.prompt([
        {
            name: "name",
            message: "What is the manager's Name?"
        },
        {
            name: "email",
            message: "What is the manager's Email?"
        },
        {
            name: "office",
            message: "What is the manager's OfficeNumber?"
        },
        {
            name: "teamMembers",
            message: "How many members in your team?"
        }]
    )

    const manager = new Manager(managerInfo.name, userId++, managerInfo.email, managerInfo.office)
    userList.push(manager)

    for (let i = 0; i < managerInfo.teamMembers; i++) {
        const employeeInfo = await inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: `What is the role of employee ${i + 1}?`,
                choices: ["Engineer", "Intern"]
            }]
        )
        if (employeeInfo.role == "Engineer") {
            const engineerInfo = await inquirer.prompt([
                {
                    name: "name",
                    message: "What is the engineer's Name?"
                },
                {
                    name: "email",
                    message: "What is the engineer's Email?"
                },
                {
                    name: "github",
                    message: "What is the engineer's Github username?"
                }]
            )
            const engineer = new Engineer(engineerInfo.name, userId++, engineerInfo.email, engineerInfo.github)
            userList.push(engineer)
        }
        else {
            const internInfo = await inquirer.prompt([
                {
                    name: "name",
                    message: "What is the intern's Name?"
                },
                {
                    name: "email",
                    message: "What is the intern's Email?"
                },
                {
                    name: "school",
                    message: "What is the intern's school?"
                }]
            )
            const intern = new Intern(internInfo.name, userId++, internInfo.email, internInfo.school)
            userList.push(intern)
        }
    }

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR)
    // use the pre-built render function to build the list...
    fs.writeFileSync(outputPath, render(userList), "utf-8");

    console.log(`Completed writing to: ${outputPath}`)
}
main()
