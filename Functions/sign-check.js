function signCheck(num1, num2, num3){
    if(check(num1, num2, num3)){
        console.log('Negative');
    }else {
        console.log('Positive');
    }
    function check(num1,num2,num3){
        if(num1 < 0 && num2 > 0 && num3 > 0){
            return true;
        } else if(num1 > 0 && num2 < 0 && num3 > 0){
            return true;
        } else if(num1 > 0 && num2 > 0 && num3 < 0){
            return true;
        } else if( num1 > 0 && num2 > 0 && num3 > 0){
            return false;
        } else if(num1 < 0 && num2 < 0 && num3 < 0){
            return true;
        } else if( num1 < 0 && num2 > 0 && num3 < 0){
            return false;
        } else if( num1 < 0 && num2 < 0 && num3 > 0){
            return false;
        } else if(num1 > 0 && num2 < 0 && num3 < 0){
            return false;
        }
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);