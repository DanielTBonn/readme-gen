// packages necessary for this application to run
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// The questions array that holds our question objects used by the inquirer package
readmeQuestions = [
    {
        type: "input",
        name: "title",
        message: `Enter a title for this project (required):`,
        validate(value) {
            if (value !== "") {
                return true;
            }
            return "Your README must have a title."
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of the project. Ask yourself, what motivated you, what was the reason, what was solved, and what did you learn building this project? (required): ",
        validate(value) {
          if (value !== "") {
              return true;
          }
          return "Your README must have a description."
        }
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Enter installation instructions. Provide a step-by-step description: ",
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Enter examples and instructions for using this project:",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "If you would like developers to contribute, enter how they may do so:",
        
      },
      {
        type: "input",
        name: "testInstructions",
        message: "If you have written tests for your application, enter examples on how to run them: ",

    },
    {
        type: "list",
        name: "license",
        message: "Choose a license that lets developers know what they can and cannot do with this project: ",
        choices: ['apache-2.0', 'gpl-3.0', 'mit', 'bsd-2-clause', 'bsd-3-clause', 'bsl-1.0', 'cc0-1.0', 'epl-2.0', 'agpl-3.0', 'gpl-2.0', 'lgpl-2.1', 'mpl-2.0', 'unlicense', 'none'],
        filter(license) {
          if (license === 'none') {
            return '';            
          }
          return license;
        }
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Add your github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address.",
    },
]

// writes the readme to a file and adds it to the root of this repo
function writeToFile(fileName, data) {
  let genMarkdown = markdown(data);
  fs.writeFile(fileName, genMarkdown, (err) => {
    err ? console.log(err) : console.log(`${fileName} created successfully!`);
  })
}

// This will run the inquirer package using our questionse
function init() {
    inquirer
    .prompt(readmeQuestions)
    .then((answers) => {
        // writes the user answers to the questions as JSON and creates a file with the information added to it 
        let result = JSON.stringify(answers, null, '  ');
        console.log('\nYour Answers:');
        console.log(answers);
        writeToFile('generatedREADME.md', answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Prompt couldn't be rendered in the current environment", error);
        } else {
        // Something else went wrong
        console.log("Something else went wrong.", error);
        }
    });
}

// Function call to initialize app
init();


