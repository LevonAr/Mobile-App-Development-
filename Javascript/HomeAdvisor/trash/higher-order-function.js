function map(arr, fn) {
  const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })

  return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log(map(x, addOne))

function filter(arr, fn) {

  const newArr = []
  arr.forEach(val => {
    if (fn(val)) newArr.push(val)
  })
  return newArr
}
