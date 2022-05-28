
let isPalindrome = (x) => {
    let limit;
    let stringNum;
    let isPalindrome = false
    if(x < 0){
        return false
    }else{
        stringNum = x.toString();
        limit = Math.round((stringNum.length)/2)
        
        for (let i=0;i<limit;i++){
            stringNum[i] === stringNum[stringNum.length - i- 1] ? isPalindrome = true : isPalindrome = false

            if (!isPalindrome){
                return false
            }
        }
    }

    return isPalindrome
}


