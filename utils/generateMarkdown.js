//Renders a license badge depending on the user=provided data
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

//Renders link to the licensing page for the badge
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

//Generates licensing line depending on the user data.
function renderLicenseSection(data) {
  if (data.licensing === 'None') {
  return ''
}
return `${data.title} is protected and licensed under the ${data.licensing} license.`;
}

// fills the readme with the following text including user data
function generateMarkdown(data) {
  console.log(`generateMarkdown ran. ${data.title}`)

  var markdown = `# ${data.title}

  ## Table of Contents

  *[Licensing](#licensing)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#questions)

  ## Licensing 
  ${renderLicenseBadge(data.licensing)}
  ${renderLicenseLink(data.licensing)}
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
  return markdown;
}

module.exports = generateMarkdown;
