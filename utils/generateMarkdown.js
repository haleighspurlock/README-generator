// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ---
  ${data.description}

  ## Installation
  ---
  ${data.installation}

  ## Usage
  ---
  ${data.usage}

  ## Contributing
  ---
  ${data.contributing}

  ## Tests
  ---
  ${data.tests}

  ## License
  ---
  Application falls under the ${data.license} license.

  ## Questions
  ---
  Please reach out via email if you have any questions! ${data.email}
  
  Here is the link to my [Github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;