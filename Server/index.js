//server source
const express = require('express')
const app = express()

app.use(express.static('client'))

const port = 3002
app.listen(port, () => {
  console.log('listening on port ', port)
})

app.get('/comments/:artist/:song', function(req, res) {
  console.log(`GET request for artist ${req.params.artist} and song ${'req.params.song'}`)

  res.end()
})