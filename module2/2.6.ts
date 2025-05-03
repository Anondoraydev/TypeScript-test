{
  //
  // 👉 Generics এর সাথে Constraints ব্যবহার করে একটি ফাংশন
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } // এই constraint অনুযায়ী, T টাইপের মধ্যে অবশ্যই id, name এবং email থাকতে হবে
  >(
    student: T
  ) => {
    const course = 'Next Level Web Development';

    // student অবজেক্টের সাথে নতুন একটি course প্রপার্টি যোগ করা হচ্ছে
    return {
      ...student,
      course,
    };
  };

  // ✅ এই অবজেক্টটি constraint অনুসারে রয়েছে, তাই valid
  const student1 = addCourseToStudent({
    id: 1,
    name: 'Mr Y',
    email: 'z@gmail.com',
    devType: 'NLWD', // অতিরিক্ত প্রপার্টি থাকলেও সমস্যা নেই
  });

  // ✅ এখানে Generics-এর টাইপ এক্সপ্লিসিটভাবে (manually) দেওয়া হয়েছে
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 2,
    name: 'Mr X',
    email: 'Y@gmail.com',
    hasWatch: 'Apple Watch',
  });

  // ✅ এটিও constraint অনুযায়ী valid
  const student3 = addCourseToStudent({
    id: 3,
    name: 'MR X',
    email: 'r@gmail.com',
    emni: 'emni', // অতিরিক্ত প্রপার্টি থাকলেও constraint-এ problem নেই
  });

  //
}
