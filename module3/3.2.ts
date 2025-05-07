// ✅ সাধারন ইউজারের টাইপ
type NormalUser = {
  name: string;
};

// ✅ অ্যাডমিন ইউজারের টাইপ, অতিরিক্ত একটি 'role' প্রপার্টি আছে
type AdminUser = {
  name: string;
  role: 'admin';
};

// ✅ এই ফাংশনটি ইউজারের তথ্য নিবে এবং যদি সে অ্যাডমিন হয় তাহলে নাম দেখাবে
const getUser = (user: NormalUser | AdminUser) => {
  // যদি ইউজারের মধ্যে 'role' প্রপার্টি থাকে, তাহলে ধরে নেওয়া যায় সে অ্যাডমিন
  if ('role' in user) {
    console.log(`I am admin. My name is ${user.name}`);
  } else {
    // যদি 'role' না থাকে, তাহলে সে সাধারন ইউজার
    console.log(`I am normal user. My name is ${user.name}`);
  }
};

// ✅ একটি সাধারন ইউজার তৈরি করা হয়েছে
const normalUser: NormalUser = {
  name: 'mr Normal vai',
};

// ✅ একটি অ্যাডমিন ইউজার তৈরি করা হয়েছে
const adminUser: AdminUser = {
  name: 'mr Admin vai',
  role: 'admin',
};

// ✅ ফাংশন কল করা হচ্ছে
getUser(normalUser); // 👉 আউটপুট: I am normal user. My name is mr Normal vai
getUser(adminUser); // 👉 আউটপুট: I am admin. My name is mr Admin vai
