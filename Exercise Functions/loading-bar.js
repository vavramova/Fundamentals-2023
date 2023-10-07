function loadingBar(num){
    let load = check(num);
    console.log(load);
    let load2 = check2(num);
    console.log(load2);

    function check(num){
        switch(num){
            case 0 : 
                return '0% [..........]';
            case 10 : 
                return'10% [%.........]'
            case 20 :
                return'20% [%%........]'
            case 30 :
                return'30% [%%%.......]'
            case 40 :
                return'40% [%%%%......]'
            case 50 :
                return'50% [%%%%%.....]'
            case 60 :
                return'60% [%%%%%%....]'
            case 70 :
                return'70% [%%%%%%%...]'
            case 80 :
                return'80% [%%%%%%%%..]'
            case 90 :
                return'90% [%%%%%%%%%.]'
                case 100 :
                return'100% Complete!';
            }
        }
        
        function check2(num){
            
            if(num >= 0 && num <= 90){
            return'Still loading...';
            } else {
                return'[%%%%%%%%%%]'
            }
    }
}


loadingBar(100)