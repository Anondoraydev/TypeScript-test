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

  //iN guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: 'admin';
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`My name is ${user.name} my rool is ${user.role}`);
    } else {
      console.log(`I am normal user. My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: 'mr Normal vai',
  };
  const adminUser: AdminUser = {
    name: 'mr Admin vai',
    role: 'admin',
  };

  getUser(adminUser);

  //
}
