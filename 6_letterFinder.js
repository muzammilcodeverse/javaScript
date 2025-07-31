let letterFinder = (word,match)=>{
    for(let i = 0; i < word.length;i++){
        if(word[i]==match){
            console.log(match,"finds at index",i);
            return;
        }
    }
    console.log("Not Find in the word")
}
letterFinder("Muzammil","a");

let Student = {
    Name : "Muzammil Hassan",
    Class : "BSCS",
    Age : 22,
    University : "AUMC"
};

console.log(Student.Name);

Student.Height = 177;

console.log(Student);

var arrKey = ["name","age","height"];
arrKey.push("University")
var Person = {
    name : "Muzammil Hassan",
    age : 22,
    height : 177,
    University : "AUMC"
}

for(let i = 0; i < arrKey.length;i++){
    console.log(Person[arrKey[i]]);
}

console.log(Math.ceil(Math.random()*20));

let schoolName = "Khanewal Public School";
schoolName = schoolName.split(" ");
console.log(schoolName);
schoolName.push("&");
schoolName.push("College");
let newName = "";
for(let i = 0; i < schoolName.length; i++)  newName = newName+" "+schoolName[i];
console.log(newName);