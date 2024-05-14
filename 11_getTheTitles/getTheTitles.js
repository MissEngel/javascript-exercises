const getTheTitles = function(books) {
    result = [];
    let tempBook = "";

    for(let i = 0; i < books.length; i++){
        tempBook = books[i];
        result.push(tempBook['title'])
    }

    return result
};

// Do not edit below this line
module.exports = getTheTitles;
