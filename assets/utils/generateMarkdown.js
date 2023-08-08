 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Description

${data.description}

## Installation Instructions

${data.installationInstructions}

## Usage Information

${data.usageInformation}

## How to Contribute

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## License

${data.license}

## Questions

${data.githubUsername}
${data.email}

`;
          
}

module.exports = generateMarkdown;

const question = {
  "title": "readme-gen",
  "description": "Generate's a readme using the CLI, node, and inquirer.",
  "installationInstructions": "Clone this repository, install node, and make sure that inquirer is downloaded.",
  "usageInformation": "Anyone can use this program.",
  "contributionGuidelines": "Finish the rest of the program for me.",
  "testInstructions": "Unsure.",
  "license": "MIT",
  "githubUsername": "danieltbonn",
  "email": "danieltbonn@gmail.com"
}

// let genMark = generateMarkdown(question);
// console.log(genMark)
