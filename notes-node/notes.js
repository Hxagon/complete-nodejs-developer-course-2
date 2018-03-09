const fs = require('fs')
const _ = require('lodash')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  const note = {
    title, body
  }

  const notes = fetchNotes()

  if (notes.filter((note) => note.title === title).length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  return fetchNotes()
}

const getNote = (title) => {
  const notes = fetchNotes()
  const note = _.first(notes.filter((note) => note.title === title))

  if (!_.isEmpty(note)) {
    return note
  }

  return false
}

const removeNote = (title) => {
  const currentNotes = fetchNotes()
  const newNotes = _.remove(currentNotes, function (note) {
    return note.title !== title
  })

  if (currentNotes.length > 0) {
    saveNotes(newNotes)
    return true
  }
  return false
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
