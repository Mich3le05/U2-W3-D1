// le classi in JS sono un metodo ALTERNATIVO di creare delle funzione costruttore
// lo scopo è sempre il medesimo: creare in modo robusto MOLTI oggetti dello stesso tipo

// classe User con 4 proprietà + 1 metodo
class User {
  // inseriamo le proprietà
  constructor(_firstName, _lastName, _age, _location) {
    // qui dentro inserite le proprietà il cui valore viene determinato da un parametro
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this._location = _location
  }

  compareAge(UserTwo) {
    if (this.age > UserTwo.age) {
      return `${this.firstName} è più vecchio di ${UserTwo.firstName}`
    } else if (this.age < UserTwo.age) {
      return `${this.firstName} è più giovane di ${UserTwo.firstName}`
    } else {
      return `${this.firstName} e ${UserTwo.firstName} hanno la stessa età`
    }
  }
}

const Mario = new User('Mario', 'Bros', '30', 'Palermo')

console.log(Mario)

const Luigi = new User('Luigi', 'Super', '32', 'Messina')

console.log(Luigi)

console.log(Mario.compareAge(Luigi))

// ESERCIZIO 2

// classe Pet con 4 proprietà + 1 metodo
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  compareOwners(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const petOne = new Pet('Mao', 'Mario', 'Gatto', 'Super')
const petTwo = new Pet('Bau', 'Luigi', 'Cane', 'Special')
