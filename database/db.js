const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:3002/Soundcloud';

const db = mongoose.connect(mongoUri);

db.on('open',() => console.log('connected to mongoDB'))
db.on('error', err => {
  console.log('error connecting to mongoDB ', err)
})

const commentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  songArtist: String,
  songTitle: String,
  songTime: String,
  userName: String,
  commentDate: Date
})

const Comments = mongoose.model('Comments', commentSchema)

module.exports.db = db
module.exports.Comments = Comments