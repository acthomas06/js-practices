//This function returns the index (n) value of the fibonnaci sequence.
function fibonnaci(n) {
    let fiboArray = [0, 1];

    if (n <= 2) {
        return 1;
    }
    //Loop through the array and continue adding the previous two numbers to the current number
    for (var i = 2; i <= n; i++) {
        fiboArray[i] = fiboArray[i-1] + fiboArray[i-2];
    }

    return fiboArray[n];
}

//The same function but using recursion
function fibonnaciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2);
    }
}