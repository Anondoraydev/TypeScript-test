{
  // 👉 Access Modifiers উদাহরণ (public, private, protected, readonly)

  class BankAccount {
    // 👉 public: যে কেউ বাইরে থেকে access করতে পারবে
    public readonly id: number;

    // 👉 public: এই property ও বাইরের দিক থেকে access করা যাবে
    public name: string;

    // 👉 private: শুধুমাত্র এই class এর ভিতরে access করা যাবে
    private _balance: number;

    // 👉 protected: subclass এর ভিতরেও access করা যাবে (example নিচে আছে)
    protected branch: string = 'Dhaka';

    constructor(id: number, name: string, balance: number) {
      this.id = id; // readonly property, একবার assign করার পর আর পরিবর্তন করা যাবে না
      this.name = name;
      this._balance = balance;
    }

    // ✅ balance বাড়ানোর method
    public addDeposit(amount: number): void {
      this._balance = this._balance + amount;
    }

    // ✅ balance দেখার method
    public getBalance(): number {
      return this._balance;
    }
  }

  // ✅ subclass (ব্যাংকের স্টাফের অ্যাকাউন্ট)
  class StaffAccount extends BankAccount {
    // ✅ protected property ব্যবহার করা হচ্ছে
    showBranch() {
      console.log(`Branch is: ${this.branch}`);
    }
  }

  // 🧪 একটা account তৈরি করা হচ্ছে
  const poormanAccunt = new BankAccount(111, 'ajoy', 500);
  poormanAccunt.addDeposit(50); // deposit করা হচ্ছে
  const myBalance = poormanAccunt.getBalance(); // balance দেখা হচ্ছে
  console.log(myBalance); // 👉 Output: 550

  // 🧪 Staff account test
  const staff = new StaffAccount(222, 'Mr. Staff', 1000);
  staff.showBranch(); // 👉 Output: Branch is: Dhaka

  // ❌ নিচেরগুলো invalid:
  // poormanAccunt._balance; // private বলে access করা যাবে না
  // staff.branch; // protected বলে বাইরের দিক থেকে access করা যাবে না

  //
}
