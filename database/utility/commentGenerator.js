//helper function to randomly pick an element of an array
const rnd = (array) => {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

const commentGenerator = function() {
  //There are 2 types of comments
  let comment = ''
  //50% will be short one-liners
  const oneLiners = ['omg', 'wow', 'so cool', 'listening on repeat', 'Awesome!', 'This is great', 'this song is terrible', 'Can\'t get enough', 'Comment if ur here in 2019', 'who even likes this?']
  //the rest will be mad-libs spam asking for views
  
  
  // [into] I'm a [age] year old [genre artist] from [Location]. [Plea] check out my new song [thing][location preposition][general place]
  let  ages = []
  for (let age = 5; age < 100; age++) {
    ages.push(age)
  }
  const intros = ['Hey!', 'Yo', 'Omg', 'PLEASE READ!', 'Listen', 'So...', 'For real']
  const genreArtists = ['country singer', 'rap phenom', 'metalhead', 'comedian', 'jazz pianist', 'drummer']
  const locations = ['NYC', 'Los Angeles', 'Denmark', 'Paris', 'the bay area', 'Tokyo', 'Australia', 'Israel', 'the midwest', 'Moscow', 'Istanbul', 'South Africa', 'Beijing', 'Mexico City', 'Miami']
  const pleas = ['Please', 'Why don\'t you', 'Come', 'Ya\'ll outta']
  const things = ['fire', 'ice', 'metal', 'stars', '', 'daggers', 'yarn', 'kittens', 'tacos', '']
  const locationPrepositions = ['inside', 'next to', 'between','on', 'under'] 
  const generalPlaces = ['corn fields', 'the beach', 'the moon', 'my old pickup', 'outer space']
  
  const madLibComment = `${rnd(intros)} I'm a ${rnd(ages)} year old ${rnd(genreArtists)} from ${rnd(locations)}. ${rnd(pleas)} check out my new song ${rnd(things)} ${rnd(locationPrepositions)} ${rnd(generalPlaces)}`
  
  let commentTypeRnd = Math.random()
  if (commentTypeRnd <= .5) {
    comment = rnd(oneLiners)
  } else {
    comment = madLibComment
  }
  
  return comment
}

module.exports.commentGenerator = commentGenerator