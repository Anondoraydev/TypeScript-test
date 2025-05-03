{
  //constranints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = 'Next Level Web Development';

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: 'Mr Y',
    email: 'z@gmail.com',
    devType: 'NLWD',
  });

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

  const student3 = addCourseToStudent({
    id: 3,
    name: 'MR X',
    email: 'r@gmail.com',
    emni: 'emni',
  });

  //
}
