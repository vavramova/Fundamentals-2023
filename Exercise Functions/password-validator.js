function passwordValidator(pass){
    let isLengthValid = checkValidLength(pass);
    let isOnlyLetterAndDigits = checkLettersAndDigits(pass);
    let isEnoughDigits = digitCount(pass);

    if(isLengthValid && isOnlyLetterAndDigits && isEnoughDigits){
        console.log('Password is valid');
    }

    function checkValidLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkLettersAndDigits(pass){
        for(let curChar of pass){
            let code = curChar.charCodeAt(0);
            if(
            !((code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <=122))
            ){
                console.log('Password must consist only of letters and digits');
                return false;
            } 
        }
        return true;
    }

    function digitCount(pass){
        digit = 0;

        for(let curChar of pass){
            let code = curChar.charCodeAt(0);

            if(code >= 48 && code <= 57){
                digit++;
            }
        }

        if(digit >= 2){
            return true;
        }else {
           console.log('Password must have at least 2 digits');
           return false;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');