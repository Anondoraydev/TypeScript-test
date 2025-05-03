// জেনেরিক ইন্টারফেস যেখানে T = SmartWatch টাইপ এবং X = Bike টাইপ (ঐচ্ছিকভাবে)
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X; // ঐচ্ছিক bike প্রপার্টি
}

// Emilab Watch এর টাইপ ডেফিনিশন
type EmilabWatch = {
  brand: string;
  model: string;
  display: string;
};

// Emilab Watch ব্যবহার করে একজন সাধারন ডেভেলপার
const poorDeveloper: Developer<EmilabWatch> = {
  name: 'Anondo Ray',
  computer: {
    brand: 'acer',
    model: 'X-255URV',
    releaseYear: 2000,
  },
  smartWatch: {
    brand: 'Emilab',
    model: 'kef66',
    display: 'OLED',
  },
  // bike নেই, কারণ এটি ঐচ্ছিক
};

// Apple Watch এর টাইপ ডেফিনিশন
interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean; // বানান ঠিক করা হয়েছে (heartTrack)
  sleepTrack: boolean;
}

// Yamaha বাইকের টাইপ ডেফিনিশন
interface YamahaBike {
  model: string;
  engineCapacity: string;
}

// Apple Watch এবং Yamaha Bike ব্যবহার করে একজন ধনী ডেভেলপার
const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  name: 'RIch dev',
  computer: {
    brand: 'Hp',
    model: 'X-255UR',
    releaseYear: 2025,
  },
  smartWatch: {
    brand: 'Apple Watch',
    model: 'ke66',
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    model: 'Yamaha',
    engineCapacity: '100cc',
  },
};
