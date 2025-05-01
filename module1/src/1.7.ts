{
  //spread operator
  // rest operator
  // destructuring

  //learn spread operator

  const bros1 = ['a', 'b', 'c'];
  const bros2 = ['d', 'e', 'f'];
  //bros1=(bros2); // Type 'string[]' is not assignable to type 'never[]'.ts(2322)
  bros1.push(...bros2); // ['a', 'b', 'c', 'd', 'e', 'f']




  
  const mentors1 = {
    prisma: 'Firoz',
    next: 'Tanvir',
    courde: 'Sanjana',
  };

  const mentors2 = {
    typeScript: 'alif',
    react: 'Suman',
    next: 'Gulshan',
  };

  const allMentors = {
    ...mentors1,
    ...mentors2,
  };
  
  
  // Define a function that takes three friends' names as parameters
  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    // Print a greeting message with all three friends' names
    console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
  };

  // Call the function with three friend names
  greetFriends('Anondo', 'Sanjana', 'Monika'); // Output: Hello Anondo, Sanjana, Monika






  //learn rest operator
  const greetFriends1 = (...friends: string[]) => {
    // console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);

    friends.forEach((friend) => {
      console.log(`Hello ${friend}`);
    } );
  };
  greetFriends1('Anondo', 'Sanjana', 'Monika'); // Output: Hello Anondo, Sanjana, Monika
}
