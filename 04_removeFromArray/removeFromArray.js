const removeFromArray = function(arrayElements, itemToRemove) {

    for (let a = 0; a = itemToRemove.length(); a++){
    let location = arrayElements.indexOf(itemToRemove);
    arrayElements.splice(location, 1)
    }
    return arrayElements;

};

// Do not edit below this line
module.exports = removeFromArray;
