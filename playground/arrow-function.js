const square = (x) => x * x
console.log(square(9))

const user = {
  name: 'Ronny',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`)
  },
  sayHiAlt () {
    console.log(`Hi. I'm ${this.name}`)
  }
}

user.sayHi()
user.sayHiAlt()
