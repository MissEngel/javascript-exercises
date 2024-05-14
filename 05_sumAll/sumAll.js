const sumAll = function(num1, num2) {
    let result = 0;
    const majorNum = (num1 > num2)? num1 : num2;
    const minorNum = (num1 < num2)? num1 : num2;

    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if(typeof num1 !== "number" || typeof num2 !== "number" ){
        return "ERROR";
    }
    else{
        for(let i = minorNum; i <= majorNum; i++){
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
