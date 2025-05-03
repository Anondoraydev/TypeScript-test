{
  // 👉 একটি সাধারণ টাইপ যেখানে তিনটি বাহনের ধরন দেওয়া আছে
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // 👉 দুইভাবে keyof ব্যবহার করে টাইপ বানানো হয়েছে
  type Owner = 'bike' | 'car' | 'ship'; // ম্যানুয়ালি বানানো
  type Owner2 = keyof Vehicle; // keyof অপারেটর দিয়ে বানানো (অটোমেটিক্যালি key গুলো বের করে)

  // 👉 একটি জেনেরিক ফাংশন যেটি একটি অবজেক্ট ও একটি কী নেয়, এবং ঐ কির ভ্যালু রিটার্ন করে
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]; // এটি নিশ্চিত করে যে key টি obj এর মধ্যেই রয়েছে
  };

  // 👉 একটি user অবজেক্ট
  const user = {
    name: 'Anondo Ray',
    age: 26,
    address: 'Rangpur',
  };

  // 👉 একটি car অবজেক্ট
  const car = {
    model: 'Toyta 100',
    year: 2002,
  };

  // ✅ নিচের কলটি ঠিক কাজ করবে কারণ 'model' হচ্ছে car অবজেক্টের একটি key
  const result1 = getPropertyValue(car, 'model'); // return হবে 'Toyta 100'

  // ❌ যদি তুমি getPropertyValue(car, 'name') লিখো তাহলে error দিবে, কারণ 'name' car অবজেক্টে নেই
}
