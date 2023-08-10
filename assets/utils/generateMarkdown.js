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
  let markdown1 = `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installationInstructions}

## Usage

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

  let markdown2 = addSections(data);
  return markdown2;

          
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
  "email": "danieltbonn@gmail.com",
  "blank": ""
}


function addSections(data) {
  const addTable = { 
    "installationInstructions": "- [Installation](#installation)\n",
    "usageInformation": "- [Usage](#usage)\n",
    "contributionGuidelines": "- [Contribute](#contribute)\n",
    "testInstructions": "- [Tests](#tests)\n",
    "license": "- [License](#license)\n",
    "githubUsername": "- [Questions](#questions)\n",
    "email": "- [Questions](#questions)\n",
  }

  const keys = {
    "title": `# ${data.title}\n\n`,
    "description": `## Description
  
${data.description}\n\n`,
    "installationInstructions": `## Installation
  
${data.installationInstructions}\n\n`,
    "usageInformation": `## Usage
  
${data.usageInformation}\n\n`,
    "contributionGuidelines": `## How to Contribute
  
${data.contributionGuidelines}\n\n`,
    "testInstructions": `## Tests
  
${data.testInstructions}\n\n`,
    "license": `## License
  
${data.license}\n\n`,
    "githubUsername": `## Questions
  
${data.githubUsername}\n`,
    "email": `${data.email}`,
  }

  let tableOfContents = ``;

  for (let table in addTable) {
    if (data[table]) {
      tableOfContents += addTable[table];
      if (data['githubUsername'] && table === 'githubUsername') {
        break;
      }
    }
  }

  let markdownGen = ``;
  for (let key in data) {
    if (data[key]) {
      
      if (!data['githubUsername'] && key === 'email') {
        console.log(data['githubUsername'])
        markdownGen += `## Questions\n\n`
      }

      markdownGen += keys[key];
      if (key === 'description') {
        markdownGen += tableOfContents + '\n';
      }
    } 
  }
  return markdownGen;

}
k)
