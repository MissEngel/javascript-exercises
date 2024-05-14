const findTheOldest = function(people) {
    let tempPeople;
    let tempAge = 0;
    let olderAge = 0;
    let olderPerson = people[0].name;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    for(let i = 0; i < people.length; i++){

        tempPeople = people[i];

        if(!tempPeople.yearOfDeath){
            people[i].yearOfDeath = currentYear;
        }

        tempAge = tempPeople.yearOfDeath - tempPeople.yearOfBirth;

        if(tempAge > olderAge){
            olderAge = tempAge;
            olderPerson = tempPeople.name;
        }
    }
    return olderPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
