
let  repeatString = (text, number) => {
let container = [];
var regExp = /[a-zA-Z]/g;
for(let a = 0; a < number; a++){
      container.push(text); 
}

            
if (regExp.test(text)){
    return container.join("");
}
if (number < 0){
    return "ERROR";
}
if (text == ''){
    return '';
}

}

// repeatString(1, 2);
// console.log("Cat");
//  console.log(repeatString("hey",3).join(""));

// Do not edit below this line
module.exports = repeatString;
