function palindromeIntegers(arr){
    for(let num of arr){
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }
    function checkIsPalindrome(num){
        let numStr = String(num);
        let reversedNumStr = '';

        for(let i = numStr.length - 1; i >= 0; i--){
            let curChar = numStr[i];
            reversedNumStr += curChar;
        }

        let isPalindrome = numStr == reversedNumStr;
        return isPalindrome;
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);