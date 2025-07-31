try{
    console.log(a+b);
}catch(error){
    console.log(error.name);
}
console.log("Program is still Running");

let message = "Muzammil is Working on His Project!";
console.log(message.match('q'));

let addTwoNumber = (a,b) => {
    try{
        if(typeof a == "string" || typeof b == "string"){
            throw new TypeError("String Value is not Accepted");
        }
        console.log(a+b);
    }catch(err){
        console.log(err.name);
        console.log(err.message);
    }
}

addTwoNumber(5,"5");

let letterFinder = (a,b) => {
    try{
        if(a.length<2 || b.length>1){
            throw new RangeError("Length of your string don't satisfy our program");
        }
        else if(typeof a != "string" || typeof a != "string"){
            throw new TypeError("Must Use a String Here");
        }
        else {
            let i = 0;
            for(; i < a.length; i++){
                if(a[i]==b){
                    console.log("Letter Found at index",i);
                    break;
                }
            }
            if(i == a.length){
                console.log("Letter not Found");
            }
        }
    }catch(err){
        console.log(err.name);
        console.log(err.message);
    }
}

letterFinder("Muzammil","a");

var result = null;
console.log(result);

var array = {a:function() {}}
console.log(typeof array.a)