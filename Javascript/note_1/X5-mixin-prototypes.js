function FoodPrototype() 
{
    this.eat = function () {
        console.log("Eating", this.name);
    };
}

function Food(name)
{
    this.name = name;
}

Food.prototype = new FoodPrototype();


function PlantPrototype()
{
    this.grow = function()
    {
        console.log("Growing", this.name);
    }
}

function Plant(name)
{
    this.name = name;
}

Plant.prototype = new PlantPrototype();

function FoodPlantPrototype()
