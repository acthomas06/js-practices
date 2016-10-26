//Remove duplicate items from an array
Array.prototype.removeDuplicates = function() {
    let exists = {},
        outArray = [],
        existingElem;

    this.map((elem) => {
        if (!exists[elem]) {
            outArray.push(elem);
            exists[elem] = true;
        }
    });

    return outArray;
}

//Merge two sorted arrays
function mergedSortedArrays (a, b) {
    var merged = [],
        aElement = a[0],
        bElement = b[0],
        i = 1,
        j = 1;
    if (a.length == 0) {
        return b;
    }
    
    if( b.length == 0) {
        return a;
    }
    //As long as there are items in one of the arrays, perform the merge.
    while(aElement || bElement) {
        //if A element exists but B doesn't, or if A element is less than B element, push the A element to the merged array
        if (aElement && !bElement || aElement < bElement) {
            merged.push(aElement);
            aElement = a[i++];
        } else {
            merged.push(bElement);
            bElement = b[j++];
        }
    }

    return merged;
}

//Reverse a string (uses Arrays)
//4 different ways
//One liner
String.prototype.reverse = function () {
    this.split('').reverse().join('');
}

//Using a simple for loop
function reverseAString (str) {
    var resultString = '';
    for (var i = str.length-1; i >= 0; i--) {
        resultString += str[i];
    }

    return resultString;
}

//With null checks
function reverseAStringWithNullChecks (str) {
    var resultString = [];

    if (!str || typeof str != 'string' || str.length < 2) {
        return str;
    }

    for (var i = str.length-1; i >= 0; i--) {
        resultString.push(str[i]);
    }

    return resultString;
}

//With recursion
function reverseAStringWithRecursion (str) {
    if (str == "") {
        return "";
    } else {
        return reverseAStringWithRecursion(str.substr(1)) + str.charAt(0);
    }
}

//Reverse the words in a sentence
function reverseSentence (sent) {
    var reverseSentence = [],
        wordLength = 0;
    
    for (var i = sent.length-1; i >= 0; i--) {
        if (sent[i] == " " || i == 0) {
            reverseSentence.push(sent.substr(i, wordLength + 1));
            wordLength = 0;
        } else {
            wordLength++;
        }
    }

    return reverseSentence.join(' ');
}

//Quicker way with built-in functions
function reverseSentence (sent) {
    return sent.split(' ').reverse().join(' ');
}

//Get the different permutations of a string
String.prototype.getPermutations = function () {
    var arr = this.split(''),
        strLen = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (strLen == 0) {
        return this;
    }

    for (var i = 0; i < strLen; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = this.getPermutations(picked.join(''));

        for (var j = 0; j < restPerms.length; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }

    return perms;
}

//Reverse the words in a sentence but not the sentence
String.prototype.reverseInPlace = function () {
    return this.split(' ').reverse().join(' ').split('').reverse().join('');
}