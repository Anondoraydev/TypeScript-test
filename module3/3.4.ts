{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    getBalance() {
      return this.balance;
    }
  }

  const poormanAccunt = new BankAccount(111, 'ajoy', 500);
  poormanAccunt.addDeposit(500);
  const myBalance = poormanAccunt.getBalance();
  console.log(myBalance);

  //
}
