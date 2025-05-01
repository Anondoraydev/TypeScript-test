{
  //ternary operator || optional chaining || nullish coalescing operator

  const age: number = 17;

  if (age >= 18) {
    console.log('You are eligible to vote');
  } else {
    console.log('You are not eligible to vote');
  }

  const isEligibleToVote =
    age >= 17 ? 'You are eligible to vote' : 'You are not eligible to vote';
  console.log(isEligibleToVote);

  //nullish coalescing operator`
  //null / undefined

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? 'Guest User';
  const result2 = isAuthenticated ? isAuthenticated : 'Guest User';
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address?: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: 'Anondo',
    address: {
      city: 'Dhaka',
      road: 'Mirpur-1',
      presentAddress: 'Mirpur-1',
    },
  };

  const presentAddress = user?.address?.permanentAddress?? 'Not Available';
  console.log({ presentAddress });

  //
}
