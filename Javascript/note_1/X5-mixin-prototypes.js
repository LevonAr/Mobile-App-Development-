function FoodPrototype() 
{
    this.eat = function () {
        console.log("Eating", this.name);
    };
}
