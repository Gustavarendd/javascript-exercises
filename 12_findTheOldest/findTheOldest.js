const findTheOldest = function (array) {
  return array.reduce((firstPerson, nextPerson) => {
    const firstAge = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
    const nextAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
    return firstAge > nextAge ? firstPerson : nextPerson;
  });
};
function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
