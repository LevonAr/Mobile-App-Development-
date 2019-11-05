function doSomethingWithOne(callback) {
  return callback(1)
}

doSomethingWithOne(console.log)

function doSomethingWithOneAsync(callback) {
  setTimeout(() => callback(1), 1000)
}

doSomethingWithOneAsync(console.log)

function getUserFromDatabase(callback) {
    setTimeout(() => callback({firstName: 'Jordan', lastName: 'Hayashi'}), 1000)

function greetUser(user) {
