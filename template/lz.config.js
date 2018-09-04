module.exports = {
  scaffold: {
    template: 'scaffold',
    prompt: [
      {
        type: 'input',
        name: 'name',
        message: 'Scaffold Name?',
        default: 'user'
      },
    ],
    inserts: [
      {
        pattern: 'register:new:routes',
        echo: 'router.use(\'/\', <%= name %>Routes)'
      },
      {
        pattern: 'import:new:routes',
        echo: 'const <%= name %>Routes = require(\'./<%= name %>\')'
      },
    ]
  },
  controller: {
    template: 'scaffold/controllers',
    prompt: this.scaffold.prompt
  }
}
