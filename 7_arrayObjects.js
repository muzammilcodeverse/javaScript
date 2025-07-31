let clothes = [];
clothes.push("Cap");
clothes.push("Black Cargo Pent");
clothes.push("Belt");
clothes.push("Plain Black Shirt");
clothes.push("Polo Shirt");
clothes.pop();
clothes.push("T-Shirt");
console.log(clothes[2]);
let favCar = {};
favCar.color = "Black";
favCar.convertible = true;
console.log(favCar);

favCar.lightsON = () =>{
    console.log("Light is ON");
};

console.log(favCar);

favCar.lightsON();

console.log(typeof {School : "AUMC"});