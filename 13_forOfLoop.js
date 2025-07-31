var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
// Values of Arrays
for (key of Object.keys(clothingItem)){
    console.log(key,":",clothingItem[key]);
}
// Key of Arrays/Objects
for(key in clothingItem){
    console.log(clothingItem[key]);
}
let arr = [10,20,30,40,50];
for (key in arr){
    console.log(arr[key]);
}

for(key of Object.entries(clothingItem)){
    console.log(key[0],":",key[1]);
}

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(){
    for(value of dairy){
        console.log(value);
    }
}
logDairy();

const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for(key of Object.keys(bird)){
        console.log(key, ":",bird[key]);
    }
}
birdCan();

function animalCan(){
    for(key in bird){
        console.log(key,":",bird[key]);
    }
}
animalCan();

let array = [10,20,30,40,50]
function sumArray(arr){
    arr.forEach((elem)=>{
        console.log(elem);
    });
}
sumArray(array);