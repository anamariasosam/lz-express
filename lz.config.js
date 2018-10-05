const path = require('path')

module.exports = {
  prompt: [
    {
      type: 'input',
      name: 'moduleName',
      message: 'What is the package name?',
      default: path.basename(process.cwd())
    },
  ]
}