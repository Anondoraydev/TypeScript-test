{
  //type guards

  //typeOf ===> type guard

  type Alphaneumeric = string | number;

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(3, 5);
  console.log(result1);

  //
}
