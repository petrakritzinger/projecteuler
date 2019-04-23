function isPrimeNumber(number) {
    let factor1 = 1;
    let factor2 = number;
    let factors = new Array();
    while (factor1 <= factor2 && factors.length < 3) {
        factors.push(factor1);
        if (factor1 != factor2)
            factors.push(factor2);
        factor1 ++;
        while (number%factor1 != 0 && number/factor1 >= factor1)
            factor1++
        factor2 = number/factor1;
    }
    return (factors.length == 2);
}

function pe7NthPrimeNumber(n) {
    let i = 2;
    let j = 3;
    while (i < n) {
        j++;
        if (isPrimeNumber(j))
            i++;      
    }
    return j;
}

console.log(pe7NthPrimeNumber(10001));