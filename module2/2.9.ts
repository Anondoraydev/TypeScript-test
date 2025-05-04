// 👉 দুটি সাধারণ টাইপ ডেফিনেশন
type a1 = number;
type b1 = string;

// 👉 Conditional type: a1 কি null টাইপ কিনা তা যাচাই করা হচ্ছে
type x = a1 extends null ? true : false;
// ফলাফল হবে false, কারণ number কখনই null না

// 👉 Nested conditional type:
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
// এখানে প্রথম চেক: a1 extends null — ❌
// তারপর দ্বিতীয় চেক: b1 extends undefined — ❌
// ফলে final রেজাল্ট হবে: `any`

// 👉 একটি অবজেক্ট টাইপ যেখানে বিভিন্ন বাহন আছে
type Sheikh = {
  bike: string;
  car: string;
  ship: string;
  plane: string;
};

// 👉 keyof Sheikh = 'bike' | 'car' | 'ship' | 'plane'

// ✅ এখন আমরা চেক করবো দেওয়া কোন key Sheikh অবজেক্টে আছে কি না
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

// 👉 এখানে 'bike' আছে Sheikh এর key গুলোর মধ্যে, তাই true
type Hasbike = CheckVehicle<'bike'>; // ✅ true

// 👉 উদাহরণ: নিচের গুলোর ফলাফল কেমন হবে?
type HasTruck = CheckVehicle<'truck'>; // ❌ false (কারণ 'truck' নেই)
type HasShip = CheckVehicle<'ship'>; // ✅ true
type HasPlane = CheckVehicle<'plane'>; // ✅ true
