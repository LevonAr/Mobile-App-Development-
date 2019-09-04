// EX 1 (LEXICAL SCOPING)

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



// EX 2 (CLOSURE)

function makeFunc() 
{
  var name = 'Mozilla';
  function displayName() 
  {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

//KEY DIFFERENCES: 1st example calls displayName in the function while the second returns it to a higher scope
