//Greatest Common Divisor between two numbers
function getGCD(a, b) {
    var divisor = 2,
        gcd = 1;
    
    //if either of the numbers are less than 2, the only GCD can be 1
    if(a < 2 || b < 2) {
        return 1;
    }

    //as long as the numbers are both greater than the divisor
    //and if 
    while(a >= divisor && b >= divisor) {
        if(a % divisor == 0 && b % divisor == 0) {
            gcd = divisor;
        }
        gcd++;
    }

    return gcd;
}