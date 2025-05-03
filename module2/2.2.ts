{
  // Type Alias ব্যবহার করে ইউজার টাইপ ডিফাইন
  type User1 = {
    name: string;
    age: number;
  };

  // Interface ব্যবহার করে ইউজার টাইপ ডিফাইন
  interface User2 {
    name: string;
    age: number;
  }

  // Type Alias-এর মাধ্যমে নতুন টাইপ তৈরি (inherit করে)
  type UserWithRole1 = User1 & { role: string };

  // Interface-এর মাধ্যমে নতুন টাইপ তৈরি (extend করে)
  interface UserWithRole2 extends User2 {
    role: string;
  }

  // একটি অবজেক্ট যেখানে UserWithRole1 টাইপ ব্যবহার করা হয়েছে
  const user1: UserWithRole1 = {
    name: 'Anondo Ray',
    age: 100,
    role: 'manager',
  };

  // Type Alias দিয়ে একধরনের প্রিমিটিভ টাইপ ডিফাইন
  type RollNumber = number;

  // Array টাইপের জন্য Type Alias ব্যবহার
  type Roll1 = number[];

  // Interface দিয়ে Index Signature ব্যবহার করে Array টাইপ ডিফাইন
  interface Roll2 {
    [index: number]: number;
  }

  // Roll2 টাইপ অনুযায়ী একটি Array
  const rollNumber1: Roll2 = [1, 2, 3];

  // Function টাইপ Alias
  type Add1 = (num1: number, num2: number) => number;

  // Interface দিয়ে Function টাইপ ডিফাইন
  interface Add2 {
    (num1: number, num2: number): number;
  }

  // Add2 টাইপ অনুযায়ী একটি ফাংশন ডিফাইন
  const add1: Add2 = (num1, num2) => num1 + num2;
}
