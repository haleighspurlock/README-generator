//TODO: Create a function that returns a license badge on which license is passed in
function renderLicense(licenseType) {
  if (licenseType === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (licenseType === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  };
  if (licenseType === 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicense(data.license)}

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