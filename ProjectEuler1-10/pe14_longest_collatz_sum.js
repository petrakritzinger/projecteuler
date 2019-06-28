function findCollatzSum(number) {
    let sequence = new Array();
    while (number > 1) {
        sequence.push(number);
        if (number%2 == 0)
            number = number/2;
        else
            number = number*3 + 1;
    }
    return sequence;
}

function pe14LongestCollatzSum(bottom, top, chunksize) {
    let t0 = performance.now();
    let allSizes = new Array();
    let allNumbers = new Array();
    
    for (let i = 1; i <= top/chunksize; i++) {
        let sizes = new Array();
        let numbers = new Array();
        for (let index = bottom + (i-1)*chunksize; index <= bottom + i*chunksize; index++) {
            sizes.push(findCollatzSum(index).length);
            numbers.push(index);
        }
        let max = Math.max(...sizes);
        allSizes.push(max);
        allNumbers.push(numbers[sizes.indexOf(max)]);
    }
    let max = Math.max(...allSizes);
    let t1 = performance.now();
    console.log(allNumbers[allSizes.indexOf(max)] + " -> " + max);
    console.log((t1-t0) + " ms");
    //console.log(allSizes);
}

pe14LongestCollatzSum(1,1000000,1000);