const removeFromArray = function(arrayElements, itemToRemove, meow) {
    
    let items = [itemToRemove, meow];

    for (let a = 0; a < items.length; a++){
        let location = arrayElements.indexOf(items[a]);
        arrayElements.splice(location, 1)
    }
    
    return arrayElements;

};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// console.log(meow);
// Do not edit below this line
module.exports = removeFromArray;
