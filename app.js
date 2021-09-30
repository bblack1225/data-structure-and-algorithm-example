class Animal {
  constructor() {
    this.age = 1;
  }

  run() {
    console.log("animal run");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  run() {
    super.run();
    console.log("dog run");
  }
}

let blake = new Dog();
blake.run();
console.log(blake.age);
