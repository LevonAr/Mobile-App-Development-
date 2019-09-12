function makeFunctionArray()
{
    var arrObject = [];
    
    for(var i=0; i<5; i++)
    {
        
        arrObject.push(
            
            function ()
            {
                console.log(i);
            })
    }
    

    return arrObject;
}

const array = makeFunctionArray();

array[0]();
