// 👉 সাধারণ ফাংশন যেটি একটি স্ট্রিং নিয়ে অ্যারে রিটার্ন করে
const createArray = (param: string): string[] => {
  return [param];
};

const res1 = createArray('Bangladesh');

// 👉 জেনেরিক ফাংশন: যেকোনো টাইপের ডেটা নিয়ে একটি অ্যারে রিটার্ন করে
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const resGeneric = createArrayWithGeneric<string>('Bangladesh');

// 👉 অবজেক্ট টাইপ দিয়ে জেনেরিক ফাংশনের ব্যবহার
type User = {
  id: number;
  name: string;
};

const resGenericObj = createArrayWithGeneric<User>({
  id: 111,
  name: 'Anondo Ray',
});

// 👉 জেনেরিক ফাংশন যা দুইটি ভিন্ন টাইপের ডেটা নিয়ে একটি টিউপল রিটার্ন করে
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res10 = createArrayWithTuple<string, number>('Bangladesh', 1111);

const res11 = createArrayWithTuple<string, { name: string }>('Bangladesh', {
  name: 'Ajoy',
});

// 👉 জেনেরিক ফাংশন যেখানে স্টুডেন্ট অবজেক্টে একটি নতুন কোর্স প্রপার্টি যোগ করা হচ্ছে
const addCourseToStudent = <T>(student: T) => {
  const course = 'Next Level Web Development';

  // স্প্রেড অপারেটর (...) ব্যবহার করে মূল student অবজেক্টে নতুন প্রপার্টি যোগ করা হচ্ছে
  return {
    ...student,
    course,
  };
};

// 👉 এই স্টুডেন্ট অবজেক্টে কোর্স প্রপার্টি যুক্ত হবে
const student1 = addCourseToStudent({
  name: 'Mr Y',
  email: 'z@gmail.com',
  devType: 'NLWD',
});

// 👉 এটিতেও কোর্স প্রপার্টি যুক্ত হবে
const student2 = addCourseToStudent({
  name: 'Mr X',
  email: 'Y@gmail.com',
  hasWatch: 'Apple Watch',
});
