// Type Assertion ব্যবহার করা হচ্ছে

let anything: any; // যেকোনো টাইপ নিতে পারে এমন ভ্যারিয়েবল
anything = 'next Level web development';
anything = 222;

// কেজি থেকে গ্রাম কনভার্ট করার ফাংশন
const kgTOgm = (value: string | number): string | number | undefined => {
  if (typeof value === 'string') {
    const convertedValue = parseFloat(value) * 1000;
    return convertedValue;
  }
  if (typeof value === 'number') {
    return value * 1000;
  }
};

// Type Assertion ব্যবহার করে ফাংশনের রিটার্ন টাইপ নির্দিষ্ট করছি
const result1 = kgTOgm(10000) as number;
const result2 = kgTOgm('1000') as string;

// কাস্টম এরর টাইপ ডিফাইন
type CustomError = {
  message: string;
};

// Try-catch ব্লকে Type Assertion ব্যবহার করে এরর হ্যান্ডলিং
try {
  // এখানে কোনো error না থাকলেও ধরার জন্য ব্লক তৈরি করা হয়েছে
} catch (error) {
  console.log((error as CustomError).message);
}
