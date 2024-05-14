const palindromes = function (str) {
    str = str.toLowerCase().trim();
    str = str.replace(/[^a-zA-Z0-9]/g, "")
    newStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return (str === newStr);
};

// Do not edit below this line
module.exports = palindromes;
