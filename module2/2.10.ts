{
  //mapped type
  const arryOfNumbers: number[] = [1, 2, 3, 4, 5];

  // const arryOfSting: string[] = ['1', '2', '3', '4', '5'];

  const arryOfSting: string[] = arryOfNumbers.map(number => number.toString());
  console.log(arryOfSting);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber['height'];

  type AreaSting = {
    [key in keyof AreaNumber]: string;
  };

  //
}
