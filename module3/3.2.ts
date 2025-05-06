{
// op - inheritence
  class parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }



  class Student extends parent {
   

    constructor(name: string, age: number, address: string) {
     super(name,age,address)
    } 
  
  }
  const student1 = new Student('Mr. Student', 20, 'Uganda');
  student1.

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher = new Teacher('Mr. Teacher', 40, 'Uganda', 'profecher');
  teacher.

//

}