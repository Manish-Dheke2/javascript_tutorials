console.clear()

function Person(pName, pYearOfBirth, pJob) {
  this.name = pName;
  this.yearOfBirth = pYearOfBirth;
  this.job = pJob;

  this.calculateAge = function () {
    console.log(2024 - this.yearOfBirth)
  }
}

var john = new Person('John', 1992, 'Footballer')
console.log(john)
john.calculateAge()