const fibonacci = function(num) {
    if(+num === 0){
        return 0;
    }
    else if(+num < 0){
        return "OOPS"
    }

    let total = 1;
    let firstLastNum = 1;
    let secondLastdNum = 1;

    for(let i = 3; i <= +num ; i++){
        total = firstLastNum + secondLastdNum;
        firstLastNum = secondLastdNum;
        secondLastdNum = total;
    }

    return total;
};

// Do not edit below this line
module.exports = fibonacci;
