function map(arr, fn)
{
    const newArr = [];
    
    arr.forEach(function(val)
    {
        newArr.push(fn(val));        
    })
    
    return newArr;
}

const x = [0,1,2,3]

function addOne(num) { return num + 1; }

//console.log(map(x, addOne));

/*function filter(arr, fn)
{
    const newArr;

    arr.forEach(
    {
        
    })
}
*/
function filter(arr, fn) {
    const newArr = []
    
    arr.forEach(val => {
      if (fn(val)) newArr.push(val)
    })
    return newArr
  }

  console.log(filter(x, addOne));

function reduce(arr, fn, initialValue)
{
    let returnValue = initialValue
    
    arr.forEach( var => {
                returnValue}
                
}
