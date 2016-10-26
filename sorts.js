//Swap two numbers without using a temp variable
function swapNumber(a, b) {
    //Let's suppose a = 8 and b = 15
    b = b - a; //15 - 8 = 7
    a = a + b; //8 + 7 = 15
    b = a - b; //15 - 7 = 8

    //Final result, a = 15 and b = 8
    console.log('a equals ' + a + ', b equals ' + b);
}