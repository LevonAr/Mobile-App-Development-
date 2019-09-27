function UFC_Fighter(){
    this.contract = "standard";
    this.age = '';
    this.rank = '';
}

function FeatherWeight(){
    UFC_Fighter.call(this);
    this.weight = 145;
}
