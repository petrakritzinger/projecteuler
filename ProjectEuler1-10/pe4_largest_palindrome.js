function isPalindrome(word) {
    if (word == null)
        return false;
    else if (word.length <1)
        return false;
    else if (word.length == 1)
        return true;
    else if (word.length == 2)
        return word[0] == word[1];
    else {
        if (word[0] == word[word.length-1]) {
            return isPalindrome(word.substring(1, word.length-1));
        }
        else
            return false;
    }
    return false;
}

function pe4_LargestPalindromeProduct(numberSize)
{
    let startnum = parseInt("9".repeat(numberSize),10);
    let palindromes = new Array();
    let num1 = startnum;
    let num2 = startnum;
    while (num2 > 0 && num1 > 0) {
        //console.log(num1 + " x " + num2 + " = " + num1*num2);
        if (isPalindrome((num1*num2).toString())) {
            console.log(num1 + " x " + num2 + " = " + num1*num2);
            palindromes.push(num1*num2);
        }
        if (num1 == num2) {
            num1--;
            num2 = startnum;
        }
        else
            num2--;
    }
    return Math.max(...palindromes);
}

//console.log(isPalindrome("1230321"));

console.log(pe4_LargestPalindromeProduct(3));

//var word = "01234521543210";
//§console.log(word + " : " + isPalindrome(word));