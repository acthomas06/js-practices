//Check if a number is PRIME
function isPrime(n) {
    let divisor = 2;
    //we start at 2 because a PRIME number is divisible by 1 and itself

    while (n > divisor) {
        //when the divisor gets to n, we know that it is only divisible by 1 and itself
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
        return true;
    }
}

//Find the factors of a PRIME number
function getPrimeFactors(n) {
    var factors = [],
        divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            //push the current divisor to the factors
            factors.push(divisor);
            //change the number to the number divided by the current divisor
            n = n / divisor;
        } else {
            divisor++;
        }
        return factors;
    }
}