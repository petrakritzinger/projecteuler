function findPrimeFactors(number, primeNumbers) {
    let primeFactors = new Array();
    if (isPrimeNumber(number)) {
        primeFactors.push(number);
        return primeFactors;
    }
    let i = 0;
    while (number > 1) {
        let divider = primeNumbers[i];
        while (number%divider != 0) {
            i++;
            divider = primeNumbers[i];
        }
        primeFactors.push(divider);
        number = number/divider;
    }
    return primeFactors;
}

function findPrimeNumbersUpTo(number) {
    let primeNumbers = new Array();
    for (let index = 1; index <= number; index++) {
        if (isPrimeNumber(index))
            primeNumbers.push(index);        
    }
    return primeNumbers;
}

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

function pe5SmallestCommonDivider(number) {
    let primeNumbers = findPrimeNumbersUpTo(number);
    let primeFactorsForNumbers = {};
    for (let index = 2; index <= number; index++) {
        primeFactorsForNumbers[index] = findPrimeFactors(index, primeNumbers);  
    }
    console.log(primeFactorsForNumbers);
    let total = 1;
    let i = 0;
    let numbersToMultiply = new Array();
   
    Object.keys(primeFactorsForNumbers).forEach(key => {
        let primeFactorsForNumber = primeFactorsForNumbers[key];
        numbersToMultiply.forEach(element => {
            var index = primeFactorsForNumber.indexOf(element);
            if (index > -1) {
                primeFactorsForNumber.splice(index, 1);
            }
        });
        primeFactorsForNumber.forEach(element => {
            numbersToMultiply.push(element);
        });
      });
    console.log(numbersToMultiply); 
    console.log(numbersToMultiply.reduce( (a,b) => a * b ));
}

pe5SmallestCommonDivider(20);
