const findTheOldest = function(people) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return people.reduce((oldest, item) => {
        if(!item.yearOfDeath){
            if(!oldest.yearOfDeath){
                return currentYear - item.yearOfBirth > currentYear - oldest.yearOfBirth ? item : oldest;
            }
            return currentYear - item.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? item : oldest;
        };
        if(!oldest.yearOfDeath){
            return currentYear - item.yearOfBirth > currentYear - oldest.yearOfBirth ? item : oldest;
        }
        return item.yearOfDeath - item.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? item : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

