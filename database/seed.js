const mongoose = require('mongoose')
const db = require('./db.js').db
const Comments = require('./db.js').Comments
const save = require('./db.js').save
const commentGenerator = require('./utility/commentGenerator.js').commentGenerator
const generateTimestamp = require('./utility/generateTimestamp.js').generateTimestamp
const generateDate = require('./utility/generateDate.js').generateDate

//randomly generated usernames created by Zack.  Needed to tie comments to users.
const userNames = [ 'slipperybounce', 'dudeJones', 'GrrrlApex', 'lizardGodgreen', 'tonsOfslipperyTexas', '404Lex', 'starHonda', 'Lovergiantclassy', 'AmigoKing', '1killer', 'riderlionred', 'getsTexas', 'cleverlazy', 'FredGiant', 'doeslizard', 'savvyBella', 'catsJonesgoodness', 'likeItbananaZoe', 'lizardflex0', 'getsbanana', 'futurelazycreative', '1Jones', 'lizardLex', 'plumTexasgiant', '333881000', 'BigBoijamsotherWords', 'Lovesweet', '1000seeMe', 'jokeTexas', 'getshoola', 'flexSmithhappy', 'singerLove', 'starGodJefferson', 'cooljoke', 'Jonesclever', 'greenZebra', 'goodnessKing', 'ZebraLexLover', 'LexuslikeItjoke', 'HackerLexus99', 'Ferrariplum', 'joketheUnicorn', 'winnerhoolared', 'redtacoboom', 'FerrariGrrrlPete', 'KatieHondabanana', 'flexLex', 'peachsweet', 'juicyyellowgets', '123lazy', 'giantJefferson', 'jamsLexustricky', 'tonsOfAmigo', 'creativeGiantalways', 'puppytonsOflazy', 'singerFerrariJoey', 'boom0', 'CPUCali', 'juicytheJones', 'cleverjams', '99FellaTexas', 'catsrider', 'Lex777happy', 'happygets', 'Grrrlplum', 'jokefunny', 'bouncealways', 'slippery333', 'number1SmithGeek', '777333green', '99Pete', 'Katie88Cali', 'doeslikeIt', 'Bellasleepy', 'jadeotherWordsFred', 'cleveralways', 'bounceLover', 'savvyJessicaSmith', '1tonsOfalways', 'Hacker1000', 'hoola333Bella', 'Katiesinger', '5rider', 'singer404', 'forestsleepyJoey', 'redcoolGrrrl', 'FellaiAm', 'iAmApextricky', 'the22', 'always0JavaScripter', 'BigBoi99dude', 'lipskiller', 'QueenGrrrlCali', 'Queenhomiejade', 'Zebra777Hacker', 'Fredfunny', 'plumCPUJones', 'Lex1000', 'Maybered', 'BigBoiAmigo' ]

let records = []

//Team decisions about main page
//songArtist: 'AmigoKing'
//songTitle: 'Little Bugs'
//load in 100  records to main song
for (let i = 0 ; i < 100; i++) {
  let newRecord = {
    text: commentGenerator(),
    songArtist: 'AmigoKing',
    songTitle: 'Little Bugs',
    songTime: generateTimestamp(),
    userName: userNames[Math.floor(Math.random() * userNames.length)],
    commentDate: generateDate(new Date(2018, 1, 1), new Date())
  }
  records.push(newRecord)
}

//IF YOU WANT MORE COMMENTS UNCOMMENT BELOW HERE TO ADD 10,000 COMBINATIONS OF ARTIST AND SONG
for (let j = 0; j < 10000; j++) {
  let newRecord = {
    text: commentGenerator(),
    songArtist: userNames[Math.floor(Math.random() * userNames.length)], //song artists are also users
    songTitle: (Math.floor(Math.random() * 100)).toString(), //testing song names 1-99
    songTime: generateTimestamp(),
    userName: userNames[Math.floor(Math.random() * userNames.length)],
    commentDate: generateDate(new Date(2018, 1, 1), new Date())
  }
  records.push(newRecord)
}



let promiseRecords = []
records.forEach(record => {
  promiseRecords.push(save(record))
})


//save all the promises
Promise.all(promiseRecords).then(() => {
  console.log(promiseRecords.length, 'records saved successfully')
  db.close()
}
).catch((err) => {
  console.log('error saving records ', err)
})
