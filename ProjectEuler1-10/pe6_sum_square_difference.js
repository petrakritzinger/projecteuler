function calculateSumUpToN(n) {
    return (1+n)*n/2;
}

function calculateSquaredSumUpToN(n) {
    return (2*n+1)*(n+1)*n/6;
}

function pe6SumSquareDifference(n) {
    let sumUpToN = calculateSumUpToN(n);
    let squaredSumUpToN = calculateSquaredSumUpToN(n);
    return (sumUpToN*sumUpToN)-squaredSumUpToN;
}

console.log(pe6SumSquareDifference(100));