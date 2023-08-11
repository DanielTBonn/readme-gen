// packages necessary for this application to run
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// The questions array that holds our question objects used by the inquirer package
readmeQuestions = [
    {
        type: "input",
        name: "title",
        message: `## Title
        
Please enter a title: \n\n`,
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
        // message: "Enter a description of the project.",
        message: ` # Description
        
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?\n\n`,
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
        message: `## Installation Instructions
        
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n\n`,
    },
    {
        type: "input",
        name: "usageInformation",
        // message: "Enter usage information for the project.",
        message : `## Usage Information
        
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

\`\`\`    md
![alt text](assets/images/screenshot.png)
    \`\`\`
    \n`,
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: `## Contribution Guidelines
        
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.\n\n`,
      },
      {
        type: "input",
        name: "testInstructions",
        message: `## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n\n`,
    },
    {
        type: "list",
        name: "license",
        message: `## License
        
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`,
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
        message: "Add your github username.\n\n",
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address.\n\n",
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
        writeToFile('comparemarkdowntest.md', answers);
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


