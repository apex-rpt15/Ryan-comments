const select = require('./db.js').select
const Comments = require('./db.js').Comments

const testArtist = 'AmigoKing'
const testSong = 'Little Bugs'

test(`select should have at least 100 records for artist ${testArtist} and song ${testSong}`, (done) => {
  select(testArtist, testSong, (data) => {
    expect(data.length).toBeGreaterThanOrEqual(100)
    done()
  })
})

test('All comment timestamps should have 0, 1, or 2 minutes', (done) => {
  Comments.find({}, (err, data) => {
    data.forEach(record => {
      let testVal= Number(record.songTime.split(":")[0])
      let testCase = testVal >= 0 && testVal <= 2
      expect(testCase).toBe(true)
    })
    done()
  })
})

test('All comment timestamps should have between 0 and 59 seconds', (done) => {
  Comments.find({}, (err, data) => {
    data.forEach(record => {
      let testVal= Number(record.songTime.split(":")[1])
      let testCase = testVal >= 0 && testVal <= 59
      expect(testCase).toBe(true)
    })
    done()
  })
})

test('All comments should have a valid title (Little Bugs or 1-99) ', (done) => {
  Comments.find({}, (err, data) => {
    data.forEach(record => {
      if (record.songTitle.length > 2) {
        expect(record.songTitle).toBe('Little Bugs')
      } else {
        expect(Number(record.songTitle)).toBeLessThanOrEqual(99)
      }
      
    })
    done()
  })
})

test('All comments should have a comment date', (done) => {
  Comments.find({}, (err, data) => {
    data.forEach(record => {
      expect(record.commentDate).not.toBe(null)
    })
    done()
  })
}
)

