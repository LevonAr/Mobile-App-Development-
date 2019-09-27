function UFC_Fighter(){
    this.contract = "standard";
    this.age = '';
    this.rank = '';
}

function FeatherWeight(){
    UFC_Fighter.call(this);
    this.weight = 145;
}

FeatherWeight.prototype = Object.create(UFC_Fighter.prototype)

const Frankie_Edgar = new FeatherWeight

UFC_Fighter.prototype.boss = "Dana White"

Frankie_Edgar.boss

//undefined

// to my surprise it didn't work, so I went back and apparently its using const instead of var/let that 
// fucked it up

let Chad_Mendes = new FeatherWeight

Chad_Mendes.boss

// "Dana White"

function Top5(weightClass){
    weightClass.call(this)
    this.rank = "1-5";
    this.contract = "elite";
}
