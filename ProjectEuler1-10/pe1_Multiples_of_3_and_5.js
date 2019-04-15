function pe1_MultiplesOf5and3(upper) {
    let do3 = true;
    let do5 = true;
    let numbers = Array();
    let i = 1;

    while (do3 || do5)
    {
        if (do3 && !numbers.includes(3*i))
        {
            if (3*i < upper)
                numbers.push(3*i);
            else
                do3 = false;
        }

        if (do5 && !numbers.includes(5*i))
        {
            if (5*i < upper)
                numbers.push(5*i);
            else
                do5 = false;
        }
        
        i++;
    }
    let sum = numbers.reduce(add);
    let output = "";
    numbers.forEach(element => {
        output += element+" + ";
    });
    console.log(output.substr(0, output.length-2));
    console.log(" = " + sum);
}

function add(accumulator, a) {
    return accumulator + a;
}

pe1_MultiplesOf5and3(1000);