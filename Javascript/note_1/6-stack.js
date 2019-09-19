// when errors are thrown, the entire callstack is logged
function addOne(num) {
  throw new Error('oh no, an error!')
}
function getNum() {
  return addOne()
