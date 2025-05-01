{
  //type alias

  type Student = {
    firstName: string;
    lastName: string;
    rollNo: number;
    isMarried: boolean;
    sex: string;
    age: number;
  };

  const student1: Student = {
    firstName: 'Anondo',
    lastName: 'Ray',
    rollNo: 223226,
    isMarried: false,
    sex: 'male',
    age: 22,
  };

  const student2: Student = {
    firstName: 'Sanjana',
    lastName: 'Ray',
    rollNo: 223227,
    isMarried: false,
    sex: 'female',
    age: 22,
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = 'Anondo';
  const isAdmin: IsAdmin = true;

  //function type
  type add = (num1: number, num2: number) => number; // function type
  const add: add = (num1, num2) => num1 + num2;
}
