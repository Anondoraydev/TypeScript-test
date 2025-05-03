// ✅ Generic Array টাইপ ডিফাইন
type GenericArray<T> = Array<T>;

// ✅ সংখ্যার অ্যারে (number[])
const rollNumber: GenericArray<number> = [3, 6, 8];

// ✅ স্ট্রিংয়ের অ্যারে (string[])
const mentors: GenericArray<string> = ['Mr.X', 'Mr Y', 'Mr Z'];

// ✅ বুলিয়ানের অ্যারে (boolean[])
const boolArray: GenericArray<boolean> = [true, false, true];

// ✅ অবজেক্ট টাইপের অ্যারে
const users: GenericArray<{ name: string; age: number }> = [
  {
    name: 'Anondo Ray',
    age: 22,
  },
  {
    name: 'Ajoy Sarkar',
    age: 12,
  },
];

// ✅ সাধারণ একটি যোগফল ফাংশন
const add1 = (x: number, y: number) => x + y;
add1(30, 20);

// ✅ Generic Tuple টাইপ ডিফাইন
type GenericTuple<X, Y> = [X, Y];

// ✅ দুইটি স্ট্রিং নিয়ে গঠিত একটি tuple
const manush: GenericTuple<string, string> = ['Mr.x', 'Mr.Y'];

// ✅ নাম্বার এবং অবজেক্ট নিয়ে গঠিত একটি tuple
const userWithID: GenericTuple<number, { name: string; email: string }> = [
  1234,
  {
    name: 'Joy',
    email: 'a@gmail.com',
  },
];
