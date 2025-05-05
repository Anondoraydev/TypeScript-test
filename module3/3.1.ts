// OOP - ক্লাস (Class) ব্যবহার করে অবজেক্ট তৈরি

class Animal {
  // কনস্ট্রাক্টর এর মাধ্যমে প্রপার্টিগুলো ডিফাইন করা হয়েছে
  // এখানে parameter properties ব্যবহার করা হয়েছে, তাই আলাদা করে প্রপার্টি ডিক্লেয়ার করার প্রয়োজন নেই
  constructor(
    public name: string, // প্রাণীর নাম
    public species: string, // প্রাণীর প্রজাতি
    public sound: string // প্রাণীর ডাক
  ) {}

  // মেথডঃ প্রাণীর শব্দ (sound) কনসোলে দেখানোর জন্য
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

// ক্লাস থেকে অবজেক্ট তৈরি
const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'miw miw');

// ক্যাট অবজেক্ট এর মেথড কল করা
cat.makeSound();
