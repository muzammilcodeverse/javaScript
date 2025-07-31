class shoePrice{
    tax = 1.13;
    afterTax = (price) => {
        return price * this.tax;
    }
}
const price = new shoePrice();
console.log(Math.round(price.afterTax(700)));

let price1 = Object.create(shoePrice);
console.log(shoePrice);

// Polymorphism:
const bicycle = {
    bell : function(){
        console.log("Ring! ring. watch out please!");
    }
}
const door = {
    bell : function(){
        console.log("Ring! ring. Come here please!");
    }
}

let display = (thing) => {
    console.log(thing.bell());
}

// display(bicycle);
// display(door);

console.log(typeof(['abc'].concat(['123'])));

console.log(typeof(["abc"]+["123"]));

let date = new Date();

console.log(date);

let apple = new String("Apple");

console.log(apple);


let bird = {
    canFly:true,
    hasWings : true,
    hasFeathers : true
}

let eagle = Object.create(bird);
eagle.mammal = false;

console.log(eagle.mammal);
console.log(eagle.canFly);
console.log(eagle.hasWings);
console.log(eagle.hasFeathers);

