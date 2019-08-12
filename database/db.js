const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Soundcloud';

mongoose.connect(mongoUri, {useMongoClient: true});
const db = mongoose.connection
db.on('openUri', () => console.log('connected to mongoDB'))
db.on('error', (err) => console.log('error connecting to mongoDB ', err))

const commentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  songArtist: String,
  songTitle: String,
  songTime: String,
  userName: String,
  commentDate: Date
})

const Comments = mongoose.model('Comments', commentSchema)

const save = (comment) => {
  return Comments.create(comment)
}

const select = (artist, title, callback) => {
  Comments.find({
    songArtist: artist,
    songTitle: title
  }, (err, data) => {
    if (err) {
      console.log('error selecting data for artist: ', artist, ' and song ', title)
    } else {
      callback(data);
    }
  })
}

module.exports.db = db
module.exports.Comments = Comments
module.exports.save = save
module.exports.select = select