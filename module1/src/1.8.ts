{
  //destructuring

  //object destructuring

  const user = {
    id: 1,
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
    },
    hobbies: ['reading', 'traveling', 'cooking'],
  };

  const {
    id,
    name,
    address: { city },
  } = user; // destructuring object

  //array destructuring
  const myFriends = ['Anondo', 'Sanjana', 'Monika', 'Suman', 'Tanvir'];
  const [, , bestFriend, ...rest] = myFriends; // destructuring array
}
