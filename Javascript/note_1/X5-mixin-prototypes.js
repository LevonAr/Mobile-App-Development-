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
{
    FoodPrototype.call(this);
    PlantPrototype.call(this);

    this.harvest = function()
    {
        console.log("harvest at", this.maturity);
    };
}

function FoodPlant(name, maturity)
{
    Food.call(this, name);
    Plant.call(this, name);
    this.maturity = maturity; 
}


FoodPlant.prototype = new FoodPlantPrototype();
