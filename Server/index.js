//server source
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const select = require('../database/db.js').select;
const request = require('request')

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3002;
app.listen(port, () => {
  console.log('listening on port ', port);
});

app.get('/comments/:artist/:song', function(req, res) {
  console.log(`GET request for artist ${req.params.artist} and song ${req.params.song}`)
  let results = []
  if(!(req.params.artist || req.params.song)) {
    console.log('artist or song not specified')
    res.send(results)
  } else {
    select(req.params.artist, req.params.song, (data) => { 
      request.get('/users', function(error, response, body) {
        //handle list of users from Zack to get the user photos and followers'
        data.forEach(item => {
          let comment = {
            text: item.text,
            songTime: item.songTime,
            commentDate: item.commentDate,
            userName: item.userName,
            userPhoto: 'someurl.com', //stub until zack's endpoint is available
            userFollowers: Math.floor(Math.random()) * 1000 //stub until zack's endpoint is available 
          }
          results.push(comment)  
        })    
        res.send(results)
      })
    })
  }
})