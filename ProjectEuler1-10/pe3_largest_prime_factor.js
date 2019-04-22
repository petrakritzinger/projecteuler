

function pe3_largestPrimeFactor(number) {
    //number++;
    let factors = findFactors(number);
    let primeFactors = new Array();
    if (factors.length == 2) {
        primeFactors.push(number); 
    } else {
        factors.forEach(factor => {
            if (factor != 1 && factor != number) {
            let f = findFactors(factor);
            if (f.length == 2)
                primeFactors.push(factor);
            }
        });
    }
    console.log("Prime Factors: " + primeFactors);
    return Math.max(...primeFactors) ;
}

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

console.log("Largest Prime Factor: " + pe3_largestPrimeFactor(600851475143));