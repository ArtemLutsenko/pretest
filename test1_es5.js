
//Написать класс Dog, который наследуется от класcа Animal.
// Класс Animal имеет метод getName (name можно передать в конструктор). 
//Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».


class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `Dog ${this.name} is barking`;
  }
}
var dog = new Dog("Aban");

//dog.getName() === 'Aban'; // true
//dog.bark() === 'Dog Aban is barking'; // true

console.log(dog.getName());
console.log(dog.bark());
console.log(dog.getName() === "Aban");
console.log(dog.bark() === "Dog Aban is barking");
