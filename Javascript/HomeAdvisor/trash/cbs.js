function doSomethingWithOne(callback) {
  return callback(1)
}

doSomethingWithOne(console.log)

function doSomethingWithOneAsync(callback) {
