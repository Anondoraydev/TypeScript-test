{
  //union types

  type StringOrNumber = string | number;
  type Developer =
    | 'developer'
    | 'designer'
    | 'manager'
    | 'qa'
    | 'devops'
    | 'admin'; // string literal type
  
  
  type dev = StringOrNumber | Developer; // union type


  const id: StringOrNumber = 123; // string or number

  type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bladeGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  };

  const user1: User = {
    name: 'Anondo',
    gender: 'male',
    bladeGroup: 'A+',
  };


  type FronendDeveloper = {
    skill: string[];
    designation1: 'Frontend Developer';
  }

  type BackendDeveloper = {
    skill: string[];
    designation2: 'Backend Developer';
  };


type FullStackDeveloper = FronendDeveloper & BackendDeveloper; // intersection type

  
const fullStackDeveloper: FullStackDeveloper = {
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
  };






  //
}
