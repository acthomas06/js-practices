//Remove duplicate items from an array
Array.prototype.removeDuplicates = function() {
    let exists = {},
        outArray = [],
        existingElem;

    this.map((elem) => {
        if(!exists[elem]) {
            outArray.push(elem);
            exists[elem] = true;
        }
    });

    return outArray;
}