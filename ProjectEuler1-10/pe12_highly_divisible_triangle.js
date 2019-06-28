function findFactors(number) {
    let factor1 = 1;
    let factor2 = number;
    let factors = new Array();
    while (factor1 <= factor2) {
        factors.push(factor1);
        if (factor1 != factor2)
            factors.push(factor2);
        factor1 ++;
        while (number%factor1 != 0 && number/factor1 >= factor1)
            factor1++
        factor2 = number/factor1;
    }
    return factors;
}

function pe12HighlyDivisableTriangle(numFactors) {
    let sum = 1;
    let i = 2;
    while (findFactors(sum).length <= numFactors) {
        sum += i;
        i++;
    }
    return sum;
}

console.log(pe12HighlyDivisableTriangle(500));