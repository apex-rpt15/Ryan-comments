//helper function to generate random timestamps from 0 to 2:59
const generateTimestamp = function() {
  let minutes, seconds
  seconds = Math.floor(Math.random() * 60)
  minutes = Math.floor(Math.random() * 2)
  if (seconds < 10) {
    return minutes.toString() + ":" + '0' + seconds.toString()
  } else {
    return minutes.toString() + ":" + seconds.toString()
  }
}

module.exports.generateTimestamp = generateTimestamp;