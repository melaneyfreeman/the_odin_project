let findTheOldest = function(array) {
 return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
    let old = oldestAge < currentAge ? currentPerson : oldest
    console.log(old)
    return oldestAge < currentAge ? currentPerson : oldest;
});
}

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }

    return death-birth;
}

const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]

  findTheOldest(people);

module.exports = findTheOldest
