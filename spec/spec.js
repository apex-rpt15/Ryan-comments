const $ = require('jquery')
const expect = require('chai').expect
const request = require('request')
const select = require('../database/db.js').select



describe('Database tests', function() {

  it('Database should have at least 100 records for (Artist: AmigoKing Song: Little Bugs)', function(done) {
    select('AmigoKing', 'Little Bugs', (data) => {
      expect(data.length).to.satisfy((num) => {
        return num >= 100;
      })
      done();
    })
  })

  it('Should return results for a song that doesn\t exist (Artist: Ryan Song: Awesome', function(done) {
    select('Ryan', 'Awesome', (data) => {
      expect(data.length).to.equal(0)
    })
    done();
  })
})


describe('Server tests', function() {

  it('should return status code 200 for a valid request (Artist: AmigoKing Song: Little Bugs)', function(done) {
    request.get('http://localhost:3002/comments/AmigoKing/Little%20Bugs', function(error, response, body){
      expect(response.statusCode).to.equal(200);
      done();
    })  
  })

  it('should return 100 comments for test song (Artist: AmigoKing Song: Little Bugs)', function(done){
    request.get('http://localhost:3002/comments/AmigoKing/Little%20Bugs', function(error, response, body){
      let parsedBody = JSON.parse(body);
      expect(parsedBody.length).to.equal(100);
      done();
    })  
  })

  it('should respond with status code 404 if artist and song are not specified', function(done) {
    request.get('http://localhost:3002/comments', function(error, response, body) {
      expect(response.statusCode).to.equal(404)
      done();
    })
  })

  it('should have the correct properties in the response objects', function(done) {
    request.get('http://localhost:3002/comments/AmigoKing/Little%20Bugs', function(error, response, body){
      let parsedBody = JSON.parse(body);
      expect(parsedBody[0].text).to.exist;
      expect(parsedBody[0].songTime).to.exist;
      expect(parsedBody[0].commentDate).to.exist;
      expect(parsedBody[0].userName).to.exist;
      expect(parsedBody[0].userPhoto).to.exist;
      expect(parsedBody[0].userFollowers).to.exist;
      done();
    })  
  })

})

describe('Client tests', function() {
  it('To do...', function(done) {
    //To do...
    request.get('http://localhost:3002/comments/AmigoKing/Little%20Bugs', function(error, response, body){
      
      done();
    })
    
  })
})