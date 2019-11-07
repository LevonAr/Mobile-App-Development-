function map(arr, fn) {
const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })
