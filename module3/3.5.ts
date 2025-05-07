{
  // 👉 Getter এবং Setter এর ব্যবহার

  class BankAccount {
    public readonly id: number; // 👉 একবার assign করলে আর বদলানো যাবে না
    public name: string; // 👉 বাইরে থেকে access করা যাবে
    private _balance: number; // 👉 শুধু ক্লাসের ভিতরেই ব্যবহার করা যাবে

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // 👉 Setter: যখন deposit করা হবে, তখন এই setter call হবে
    set defosit(amount: number) {
      this._balance = this.Balance + amount;
    }

    // 👉 Getter: balance access করার সময় এই method call হবে
    get Balance(): number {
      return this._balance;
    }
  }

  // ✅ নতুন একটি account তৈরি করা
  const poormanAccunt = new BankAccount(111, 'ajoy', 500);

  // ✅ deposit করা হচ্ছে (setter ব্যবহার করে)
  poormanAccunt.defosit = 10;

  // ✅ balance check করা হচ্ছে (getter ব্যবহার করে)
  const myBalance = poormanAccunt.Balance;

  console.log(myBalance); // 👉 Output: 510
}
