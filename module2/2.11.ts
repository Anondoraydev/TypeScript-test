{
  // 🔧 Utility Types

  // একটি Person টাইপ তৈরি করা হয়েছে যেখানে কয়েকটি প্রপার্টি আছে
  type Person = {
    name: string;
    age: number;
    email?: string; // এটি অপশনাল
    contactNo: string;
  };

  // ✅ Pick: Person টাইপ থেকে নির্দিষ্ট প্রপার্টিগুলো (name ও age) বেছে নেয়া হয়েছে
  type Name = Pick<Person, 'name' | 'age'>;

  // ✅ Omit: Person টাইপ থেকে নির্দিষ্ট প্রপার্টিগুলো বাদ দেয়া হয়েছে (name ও age)
  type ContactInfo = Omit<Person, 'name' | 'age'>;

  // ✅ Required: সব প্রপার্টি বাধ্যতামূলক করা হয়েছে, এমনকি অপশনাল email-ও এখন আবশ্যক
  type PersonRequired = Required<Person>;

  // ✅ Partial: সব প্রপার্টিকে অপশনাল করে ফেলা হয়েছে
  type PersonPertial = Partial<Person>;

  // ✅ Readonly: সব প্রপার্টি read-only হয়ে গেছে, মান পরিবর্তন করা যাবে না
  type PersonReadOnly = Readonly<Person>;

  const Person1: PersonReadOnly = {
    name: 'Mr>XY',
    age: 200,
    contactNo: '01826339098',
  };

  // নিচের লাইনটি ত্রুটি দিবে কারণ Person1 এর name প্রপার্টি read-only
  // Person1.name = 'MR.YX'; ❌ পরিবর্তন করা যাবে না

  // ✅ Record: নির্দিষ্ট key ও value টাইপ দিয়ে অবজেক্ট তৈরি করা হয়
  // নিচে যেকোনো string টাইপের key এবং তার মান string টাইপের হতে হবে
  type MyObj = Record<string, string>;

  const Obj1: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
  };

  // আরেকটি উদাহরণ যেখানে key হবে string, আর মান হবে যেকোনো টাইপ (unknown)
  const EmptyObj: Record<string, unknown> = {};
}
