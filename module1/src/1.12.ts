{
  //
  //nullable types

  const searchName = (value: string | null) => {
    if (value) {
      console.log('Searching');
    } else {
      console.log('Not Searching');
    }
  };
  searchName(null);

  //unknown type

  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const convertedSpeed = (value * 1000) / 3600; // convert km/h to m/s
      console.log(`Speed in meter per second: ${convertedSpeed} ms^-1`);
    } else if (typeof value === 'string') {
      const [reault, unit] = value.split(' ');
      const convertedSpeed = (parseFloat(reault) * 1000) / 3600; // convert km/h to m/s
      console.log(`Speed in meter per second: ${convertedSpeed} ms^-1`);
    } else {
      console.log('Invalid speed value');
    }
  };
  getSpeedMeterPerSecond(null); // 100 km/h

  //never type

  const throwError = (message: string): never => {
    throw new Error(message);
  };
  throwError('This is an error message');

  //
}
