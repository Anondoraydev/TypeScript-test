// 👉 একটি টাইপ ডিফাইন করা হয়েছে Todo ডেটার জন্য
type Todo = {
  id: number;
  userId: number;
  completed: boolean;
};

// 👉 একটি অ্যাসিনক্রোনাস ফাংশন যেটি একটি API থেকে Todo ডেটা রিটার্ন করে
const getTodo = async (): Promise<Todo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json(); // JSON ডেটা হিসেবে রেসপন্সকে কনভার্ট করা হচ্ছে
  return data; // এই data টাইপ হবে Todo
};

getTodo(); // ফাংশন কল করা হয়েছে

// 👉 আরেকটি কাস্টম টাইপ
type someThing = { someThing: string };

// 👉 নিজে নিজে একটি Promise তৈরি করা হয়েছে যেটি someThing টাইপের ডেটা রিটার্ন করে
const createPromise = (): Promise<someThing> => {
  return new Promise<someThing>((resolve, reject) => {
    const data: someThing = { someThing: 'someThing' };
    if (data) {
      resolve(data); // সফল হলে resolve করা হচ্ছে
    } else {
      reject('Failed to load data'); // ব্যর্থ হলে error পাঠানো হচ্ছে
    }
  });
};

// 👉 Promise-টি async/await দিয়ে হ্যান্ডল করা হচ্ছে
const showData = async () => {
  const data: someThing = await createPromise(); // createPromise() থেকে data পাওয়া যাচ্ছে
  return data;
};

showData(); // ফাংশন কল করা হয়েছে
