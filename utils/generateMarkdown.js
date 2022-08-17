//Renders a license badge depending on the user=provided data
function renderLicenseBadge(license) {
  switch(license){
    case 'APACHE 2.0':
      return `![License](https://img.shields.io/badge/license-APACHE_2.0-purple.svg)`;
    case 'BSD 3':
      return `![License](https://img.shields.io/badge/license-BSD_3-orange.svg)`;
    case 'GNU GPL':
      return `![License](https://img.shields.io/badge/license-GNU_GPL-yellow.svg)`;
    case 'MIT':
      return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
    case 'None':
      return '';
}
}

//Renders link to the licensing page for the badge
function renderLicenseLink(license) {
  switch(license){
    case 'APACHE 2.0':
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'BSD 3':
      return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'GNU GPL':
      return `[GNU GPL](https://www.gnu.org/licenses/licenses.en.html#GPL)`;
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'None':
      return '';
}
}

//Generates licensing line depending on the user data.
function renderLicenseSection(data) {
  if (data.licensing === 'None') {
  return ''
}
return `${data.title} is protected and licensed under the ${renderLicenseLink(data.licensing)} license.`;
}

// fills the readme with the following text including user data
function generateMarkdown(data) {
  var markdown = `# ${data.title}

## Table of Contents

* [Licensing](#licensing)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

## Licensing 
${renderLicenseBadge(data.licensing)}
> ${renderLicenseSection(data)}

## Description

${data.description}
  
## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.usage}

## Test

> ${data.test}


## Question

Please reach out to me at ${data.email} with any questions or issues.

You can find more of my work on my GitHub page at https://github.com/${data.username}/.
`;
return markdown;
}

module.exports = generateMarkdown;
