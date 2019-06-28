function findC(a,b) {
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    if (isInt(c))
        return c;
    else
        return -1;
}

function isInt(n) {
    return n % 1 === 0;
 }

 function pe9SpecialPythagoreanTriplet(sumof) {
    
    for (let a = 1; a < sumof; a++) {
        for (let b = a; b < sumof; b++) {
            let c = findC(a,b);
            if (c > 0 && a+b+c == sumof) {
                console.log(a + " " + b + " " + c);
                return a*b*c;
            }
            
        }
        
    }
    return -1;
 }

 console.log(pe9SpecialPythagoreanTriplet(1000));