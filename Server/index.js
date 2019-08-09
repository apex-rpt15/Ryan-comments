//server source
const express = require('express')
const app = express()

app.use(express.static('client'))

const port = 3004
app.listen(port, () => {
  console.log('listening on port ', port)
})

app.get('/comments/:artist/:track', function(req, res) {
  console.log(`GET request for artist ${''} and song ${''}`)
})