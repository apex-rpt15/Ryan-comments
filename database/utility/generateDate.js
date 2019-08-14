//helper function to generate a random date for the comment
const generateDate = function(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports.generateDate = generateDate