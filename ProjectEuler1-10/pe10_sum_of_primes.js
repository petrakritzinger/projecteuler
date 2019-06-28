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

function findPrimeNumbersUpTo(number) {
    let primeNumbers = new Array();
    for (let index = 1; index <= number; index++) {
        if (isPrimeNumber(index))
            primeNumbers.push(index);        
    }
    return primeNumbers;
}

console.log(findPrimeNumbersUpTo(2000000).reduce(function(a,b){
    return a + b
  }, 0));