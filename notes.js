const fs = require('fs')


// Get Notes Function

const getNotes = function() {
  return 'Your notes...'
}

// Add Notes Function

const addNote = function(title, body) {
  const notes = loadNotes()

  notes.push({
      title: title,
      body: body
  })

  saveNotes(notes)

}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch (e) {
    return []
  }
}



// exporting object with 2 properties
module.exports = {
  getNotes: getNotes,
  addNote: addNote
}