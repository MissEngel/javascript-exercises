const removeFromArray = function(arr, ...elmntToRemove) {
    for(let i = 0; i < arr.length ;i++){
        for(let j = 0; j < elmntToRemove.length; j++){
            if(arr[i] === elmntToRemove[j]){
                arr.splice(i, 1);
                i -= 1;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
