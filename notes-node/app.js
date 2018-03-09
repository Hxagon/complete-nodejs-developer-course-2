const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')

const argv = yargs.argv

const command = argv._[0]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note added with title: ', note.title)
  } else {
    console.log('There is already a Note with the title: ', argv.title)
  }
} else if (command === 'list') {
  const allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => console.log(note))
} else if (command === 'read') {
  const note = notes.getNote(argv.title)
  if (note) {
    console.log(`Found note with title ${note.title} and body ${note.body}`)
  } else {
    console.log(`Note with title ${argv.title} couldn't be found`)
  }
} else if (command === 'remove') {
  if (notes.removeNote(argv.title)) {
    console.log(`Note with title ${argv.title} was deleted`)
  } else {
    console.log(`Note with title ${argv.title} was not found`)
  }
} else {
  console.log('Command not recognized perfect')
}
