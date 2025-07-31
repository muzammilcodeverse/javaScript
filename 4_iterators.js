for(let i = 5;i >= 1; i--) console.log(i);
console.log("\nHappy New Year :)");

// Draw an H on Console.
for(let i = 1; i <= 11; i++){
    for(let j=1;j<=20;j++){
        if(j == 6 || j==20) process.stdout.write("||");
        if(i == 6 && j>=6 && j<20) process.stdout.write("=");       
        if(i == 6 && j>=6 && j<20) ;
        else process.stdout.write(" ");
    }
    console.log("");
}

console.log();

// for(let i = 1; i < 3; i++) 
//     for (let j = 1; j < 5; j++) console.log("Week",i,"Day",j);

// Table of a Number 

// for (let i = 17; i < 19; i++)
//     for(let j = 1; j < 11; j++) console.log(i,"*",j,"=",i*j);

// for (let i = 1; i < 11; i++){
//     if(i == 1) console.log("Gold Medal");
//     else if(i == 2) console.log("Silver Medal");
//     else if(i == 3) console.log("Bronze Medal");
//     else console.log(i);
// }

for(let i = 1; i < 11; i++){
    switch(i){
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
            break;   
    }
}