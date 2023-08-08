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
        message: "Please enter a title: ",
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
        message: "Enter a description of the project.",
    },
    {
        type: "input",
        name: "installation-instructions",
        message: "Enter instructions for installing the project.",
    },
    {
        type: "input",
        name: "usage-information",
        message: "Enter usage information for the project.",
    },
    {
        type: "input",
        name: "contribution-guidelines",
        message: "Enter guidelines for contributing to the project",
    },
    {
        type: "input",
        name: "test-instructions",
        message: "Enter instructrions for testing the project.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ["MIT", "GIT", "???"],
    },
    {
        type: "input",
        name: "github-username",
        message: "Add your github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address.",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require('fs');
  fs.appendFile(fileName, data, (err) => {
    err ? console.log(err) : console.log(`${fileName} created successfully!`)
  })
}

// TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
    inquirer
    .prompt(readmeQuestions)
    .then((answers) => {
        // Information generated will be used to create a table of contents
        console.log('\nTesting:');
        console.log(JSON.stringify(answers, null, '  '));
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

// Function call to initialize app
init();
