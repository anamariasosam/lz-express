const db = require('./db/db')
const app = require('./app')

db.then(() => {
  console.log('Connected to mongo')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Ready', process.env.PORT || 3000)
})