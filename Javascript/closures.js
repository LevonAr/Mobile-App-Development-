
function init() 
{
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() // displayName() is the inner function, a closure
  {
    alert(name); // use variable declared in the parent function
  }
  displayName();
}

init();


function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
