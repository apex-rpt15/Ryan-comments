//server source
const express = require('express');
const compression = require('compression')
const app = express();
const bodyParser = require('body-parser');
const select = require('../database/db.js').select;
const request = require('request')

app.use(compression())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

//using /:artist/:song as middleware to route everything to index.html
app.use('/:artist/:song', express.static('client/dist'));
app.use('/', express.static('client/dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments/:artist/:song', function(req, res) {
  try {
    console.log(`GET request for artist ${req.params.artist} and song ${req.params.song}`)
    let results = []
    if((!req.params.artist || !req.params.song)) {
      console.log('artist or song not specified')
      res.send(results)
    } else {
      select(req.params.artist, req.params.song, (data) => {
        let usersUrl = process.env.USERS_URL || 'http://localhost:3004'
        request.get(`${usersUrl}/users`, (error, response, body) => {
          console.log(`request to endpoint ${usersUrl}/users`)
          data.forEach(item => {
            //stub followers and photo if they aren't matched to Zack's data
            let parsedBody
            if(body !== undefined) {
              parsedBody = JSON.parse(body)
            }
            let actualFollowers = 0
            let actualPhoto = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            let actualLocation = ''
            if (parsedBody !== undefined) {            
              parsedBody.forEach(user => {
                if(user.username === item.userName) {
                  actualPhoto = user.photo
                  actualFollowers = user.followers
                  actualLocation = user.location
                }
              })
            }
            let comment = {
              text: item.text,
              songTime: item.songTime,
              commentDate: item.commentDate,
              userName: item.userName,
              userPhoto: actualPhoto, //stub until zack's endpoint is available
              userFollowers: actualFollowers, //stub until zack's endpoint is available 
              location: actualLocation 
            } 
            results.push(comment)  
          }) 
          res.send(results)
        })
      })
    }
  }
  catch(err) {
    console.log('error in catch', err)
    //send the fake data here instead if Zack's endpoint isn't running
    res.send([{
      text: 'failure',
      songTime: '00:00',
      commentDate: new Date(),
      userName: 'Ryan',
      userPhoto: '',
      userFollowers: '1',
      location: 'nowhere'
    }])
  }
 
})

const port = 3002;
app.listen(port, () => {
  console.log('listening on port ', port);
});