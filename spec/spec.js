const $ = require('jquery')
const expect = require('chai').expect
const request = require('request')


describe('Database tests', function() {

  it('Database Soundcloud should do something', function(done) {
    //to do...
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
  it('Client should have comment elements after a valid request', function(done) {
    //To do...
    request.get('http://localhost:3002/comments/AmigoKing/Little%20Bugs', function(error, response, body){
      
      done();
    })
    
  })
})