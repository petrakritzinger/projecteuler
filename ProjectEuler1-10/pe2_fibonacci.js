function pe2_fibonacci(upper) {
    let fib1 = 1;
    let fib2 = 1;
    let arr = new Array();
    let fib = new Array();
    fib.push(fib1);
    fib.push(fib2);
    while (fib1+fib2 < upper) {
        fib2 = fib1 + fib2;
        fib1 = fib2 - fib1;
        if (fib2 % 2 == 0)
            arr.push(fib2);
        fib.push(fib2);
    }
    let sum = arr.reduce(add);
    let output = "";
    fib.forEach(element => {
        output += element+", ";
    });
    console.log(output.substr(0, output.length-2));
    output="";
    arr.forEach(element => {
        output += element+" + ";
    });
    console.log(output.substr(0, output.length-2));
    console.log(" = " + sum);
}

function add(accumulator, a) {
    return accumulator + a;
}

pe2_fibonacci(4000000);