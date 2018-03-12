const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject(new Error('Arguments must be numbers'))
      }
    }, 1500)
  })
}

asyncAdd(7, 7).then((result) => {
  console.log(result)
  return asyncAdd(result, 10)
}).then((result) => {
  console.log(result)
}).catch((errorMessage) => {
  console.log(errorMessage)
})

/*const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, it worked!')
    reject(new Error('Unable to fulfill promise'))
  }, 2500)
})

somePromise.then((message) => {
  console.log(message)
}, (errorMessage) => {
  console.log(errorMessage)
})*/
