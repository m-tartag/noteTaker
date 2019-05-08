const fs = require('fs')


// Reusable Functions

// Load notes from file using fs

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch (e) {
    return []
  }
}

// Save notes function

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


// Add/Remove Functions


// Add Notes Function

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }

}

// Remove Notes Function 

const removeNote = function (title) {

  const notes = loadNotes()
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })
  saveNotes(notesToKeep)
}











// Get Notes Function


// const getNotes = function () {
//   return 'Your notes...'
// }




// how to export multiple things at once

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}