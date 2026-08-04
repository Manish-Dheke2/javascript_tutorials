console.clear()

var person = {
  name: 'Jack',
  yearOfBirth: 1990,
  job: 'Pilot',
  getName: function() {
    console.log(this.name)
  },
  parents: {
    name: 'Raj',
  yearOfBirth: 1970,
  job: 'Doctor',
  getName: function() {
    console.log(this.name)
  },
  }
}

person.getName()
person.parents.getName()
