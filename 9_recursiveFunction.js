let recursive = (upVal) => {
    if (upVal > 9) return; //baseCondition
    console.log("Value is >>",upVal);
    upVal++;
    recursive(upVal);
}
recursive(5);
let tillSum = (n) => {
    if(n===0) return 0
    return n + tillSum(n - 1);
} 

console.log(tillSum(5));