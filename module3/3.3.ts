{
  // 👉 instanceof guard ও smart type guard ব্যাবহার করে উদাহরণ

  // 🐾 Animal base class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    // 💤 সাধারন শব্দ
    makeSound() {
      console.log('i am making sound');
    }
  }

  // 🐶 Dog ক্লাস, Animal থেকে extend করছে
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // 🔊 Dog এর নিজস্ব শব্দ
    makeBark() {
      console.log('i am barking');
    }
  }

  // 🐱 Cat ক্লাস, Animal থেকে extend করছে
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // 🔊 Cat এর নিজস্ব শব্দ
    makeMeaw() {
      console.log('i am meawing');
    }
  }

  // ✅ smart type guard: এটা যাচাই করে animal আসলে Dog কিনা
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  // ✅ smart type guard: এটা যাচাই করে animal আসলে Cat কিনা
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // ✅ Animal টাইপের অবজেক্ট দিয়ে কোন ক্লাস সেটা চেক করে উপযুক্ত মেথড কল
  const getAnimol = (animal: Animal) => {
    if (isDog(animal)) {
      // 👉 যদি Dog হয়
      animal.makeBark();
    } else if (isCat(animal)) {
      // 👉 যদি Cat হয়
      animal.makeMeaw();
    } else {
      // 👉 অন্য যেকোনো Animal
      animal.makeSound();
    }
  };

  // 🐕 Dog অবজেক্ট তৈরি
  const dog = new Dog('Dog vai', 'dog');

  // 🐈 Cat অবজেক্ট তৈরি
  const cat = new Cat('Cat vai', 'cat');

  // 🧪 ফাংশন কল করে output দেখা
  getAnimol(dog); // 👉 Output: i am barking
  getAnimol(cat); // 👉 Output: i am meawing

  //
}
