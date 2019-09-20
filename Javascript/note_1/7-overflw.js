// this will recurse infinitely
function recurse() {
  console.log('recursion!')
  return recurse()
}
