function Animal() 
{
    this.name = null;
    this.age = 0;
    this.genus = null;
    this.isWild = true;
}

Animal.prototype.hasName = function() 
{
    return this.name !== null;
};

Animal.prototype.isItWild = function() 
{
    return this.isWild;
};

// Here we create an instance of Animal
var someAnimal = new Animal();

// Let's give it a name
someAnimal.name = 'Dobby';
