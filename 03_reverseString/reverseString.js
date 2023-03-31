const reverseString = function() {
let firstText = "hello";
let secondText = "there";
let firstTextReverse = reverseTexts(firstText);
let secondTextReverse = reverseTexts(secondText);
function reverseTexts(text){
    let split = text.split("");
    let reverse = split.reverse();
    let result = reverse.join("");
    return result;
}

let wholeWord = [firstText, secondTextReverse];
let joinThem = wholeWord.join(" ");

// return firstTextReverse;
return joinThem;




// console.log(result);
// return {
//     firstWord: firstTextReverse,
//     secondWord: secondTextReverse,
// };

};

// Do not edit below this line
module.exports = reverseString;
