console.log('Starting app')

setTimeout(() => {
  console.log('Inside of cb')
}, 2000)

setTimeout(() => {
  console.log('Works')
}, 0)

console.log('Finishing up')
