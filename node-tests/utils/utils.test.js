const utils = require('./utils')
const expect = require('expect')

it('Should add two numbers', () => {
  const result = utils.add(33, 11)

  expect(result).toBe(44)
})

it('Should return a log string', () => {
  const result = utils.log('awesome')

  if (result !== 'Here is a log with awesome') {
    throw new Error(`Expected "Here is a log with awesome", but got "${result}"`)
  }
})

it('Should async add', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done()
  })
})
