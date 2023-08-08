// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
    transformer: (answer) => (answer ? '👍' : '👎'),
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

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
        choices: ["MIT", "GIT", "???"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require('fs');
  const markdown = require('./utils/generateMarkdown.js');
  let genMarkdown = markdown(data);
  fs.writeFile(fileName, genMarkdown, (err) => {
    err ? console.log(err) : console.log(`${fileName} created successfully!`);
  })
}

// TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
    inquirer
    .prompt(readmeQuestions)
    .then((answers) => {
        // Information generated will be used to create a table of contents
        let result = JSON.stringify(answers, null, '  ');
        console.log('\nTesting:');
        console.log(result);
        writeToFile('testmarkdown.txt', answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("There was an error.", error);
        } else {
        // Something else went wrong
        console.log("Something else went wrong.", error);
        }
    });
}

// Function call to initialize app
init();

// testing = {
//   "title": "readme-gen",
//   "description": "Generate's a readme using the CLI, node, and inquirer.",
//   "installationInstructions": "Clone this repository, install node, and make sure that inquirer is downloaded.",
//   "usageInformation": "Anyone can use this program.",
//   "contribution-guidelines": "Finish the rest of the program for me.",
//   "testInstructions": "Unsure.",
//   "license": "MIT",
//   "githubUsername": "danieltbonn",
//   "email": "danieltbonn@gmail.com"
// }

// let genMarkdown = markdown(testing);
// console.log(genMarkdown); 
