function Person(pName, pYearOfBirth, pJob) {
  this.name = pName;
  this.yearOfBirth = pYearOfBirth;
  this.job = pJob;
}

Person.prototype.calculateAge = function() {
    console.log(2024 - this.yearOfBirth)
}

Person.prototype.lastName = "clark"

var john = new Person('John', 1992, 'Pilot')
john.calculateAge()

var carol = new Person('Carol', 1995, 'Teacher')    
carol.calculateAge()

console.log(john)
console.log(carol)