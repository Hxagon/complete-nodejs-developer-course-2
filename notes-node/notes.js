const addNote = (title, body) => {
  console.log('Adding note', title, body)
}

const getAll = () => {
  console.log('Listing all notes')
}

const getNote = (title) => {
  console.log('Reading note: ', title)
}

const removeNote = (title) => {
  console.log('Removing note: ', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}