// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseKeys = {
  'apache-2.0' : ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://opensource.org/licenses/Apache-2.0'] , 
  'gpl-3.0': ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0'],
  'mit': ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT'],
  'bsd-2-clause' : ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)','https://opensource.org/licenses/BSD-2-Clause'], 
  'bsd-3-clause' : ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 'https://opensource.org/licenses/BSD-3-Clause'], 
  'bsl-1.0' : ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 'https://www.boost.org/LICENSE_1_0.txt'], 
  'cc0-1.0' : ['[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  'epl-2.0' : ['[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', 'https://opensource.org/licenses/EPL-1.0'],
  'agpl-3.0' : ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 'https://www.gnu.org/licenses/agpl-3.0'], 
  'gpl-2.0' : ['[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)','https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'], 
  'lgpl-2.1' : ['[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 'https://www.gnu.org/licenses/lgpl-3.0'],
  'mpl-2.0' : ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'https://opensource.org/licenses/MPL-2.0'], 
  'unlicense': ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'http://unlicense.org/'], 
  'none': '', 

}
function renderLicenseBadge(license) {
  let result = '';
  if(licenseKeys[license]) {
    result = licenseKeys[license][0] + '\n\n';
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = '';
  if(licenseKeys[license]) {
    result = licenseKeys[license][1]
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';
  if(license) {

  }
  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = addSections(data);
  markdown = renderLicenseBadge(data.license) + markdown;
  return markdown;
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
  
${renderLicenseLink(data.license)}\n\n`,
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

