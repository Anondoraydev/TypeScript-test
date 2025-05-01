// Learming functions
//Normal function
// Arrow function

function add(num1: number, num2: number): number {
  // return num1 + num2; // this is a normal function
  return num1 + num2;
}
add(2, 3);

//default value
function addDefault(num1: number, num2: number = 5): number {
  return num1 + num2; // this is a normal function with default value
}
addDefault(2); // 2 + 5 = 7

const addArrow = (num1: number, num2: number): number => num1 + num2; // this is an arrow function

//objects --> function--> methods

//number of properties in an object is not fixed
const poorUser = {
  name: 'Anondo',
  balance: 0,
  addBlance(balance: number): number {
    return this.balance + balance; // this is a method of an object
  },
};

//fixed string value

const poorUser1 = {
  name: 'Anondo',
  balance: 0,
  addBlance(balance: number): string {
    return `My new blance is: ${this.balance + balance}`; // this is a method of an object
  },
};

//arrys --> array of objects
const arr: number[] = [1, 2, 3, 4, 5]; // array of numbers

const newArr: number[] = arr.map((elem: number): number => elem * elem);
