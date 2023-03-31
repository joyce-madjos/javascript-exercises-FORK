const removeFromArray = function(arrayElements, itemToRemove) {

    let location = arrayElements.indexOf(itemToRemove);
    arrayElements.splice(location, 1)
    return arrayElements;

};

// Do not edit below this line
module.exports = removeFromArray;
