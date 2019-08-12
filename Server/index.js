//server source
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const select = require('../database/db.js').select;

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3002;
app.listen(port, () => {
  console.log('listening on port ', port);
});

app.get('/comments/:artist/:song', function(req, res) {
  console.log(`GET request for artist ${req.params.artist} and song ${req.params.song}`)
  select(req.params.artist, req.params.song, (data) => {
    res.send(data);
  })
})