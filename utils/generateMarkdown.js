// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'APACHE 2.0':
      return `####[License](https://img.shields.io/badge/license-${license}-purple.svg)`;
    case 'BSD 3':
      return `##[License](https://img.shields.io/badge/license-${license}-orange.svg)`;
    case 'GNU GPL':
      return `##[License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
    case 'MIT':
      return `##[License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    case 'None':
      return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'APACHE 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'BSD 3':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'GNU GPL':
      return `https://www.gnu.org/licenses/licenses.en.html#GPL`;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'None':
      return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None') {
  return ''
}
return `${data.title} is protected and licensed under the ${data.license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  *[Licensing](#licensing)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#questions)

  ## Licensing 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data)}

  ## Description

  ${data.description}
  
  ## Installation

  ## Usage

  ## Contribution

  ## Test

  ## Question

  Please reach out to me at ${data.email} with any questions or issues.

  You can find more of my work on my GitHub page at [GitHub]https://github.com/${data.username}/.
  `;
}

module.exports = generateMarkdown;
