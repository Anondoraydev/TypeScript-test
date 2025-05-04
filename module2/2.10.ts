{
  // একটি সংখ্যার অ্যারে (array) তৈরি করা হয়েছে
  const arryOfNumbers: number[] = [1, 2, 3, 4, 5];

  // উপরের সংখ্যার অ্যারেটি ব্যবহার করে প্রতিটি সংখ্যাকে string-এ রূপান্তর করা হয়েছে
  const arryOfSting: string[] = arryOfNumbers.map(number => number.toString());

  // রূপান্তরিত string অ্যারেটি কনসোলে দেখানো হচ্ছে
  console.log(arryOfSting); // আউটপুট: ['1', '2', '3', '4', '5']

  // একটি অবজেক্ট টাইপ তৈরি করা হয়েছে যেখানে height ও width দুইটি প্রপার্টি আছে এবং দুটোই number টাইপ
  type AreaNumber = {
    height: number;
    width: number;
  };

  // উপরের টাইপ থেকে শুধু height এর টাইপ আলাদা করে নেয়া হয়েছে
  type Height = AreaNumber['height']; // এখানে Height হবে: number

  // একটি জেনেরিক টাইপ তৈরি করা হয়েছে যা যেকোনো অবজেক্ট টাইপের সব প্রপার্টির টাইপ রেখে একটি নতুন টাইপ তৈরি করে
  type AreaSting<T> = {
    [key in keyof T]: T[key];
  };

  // এখন AreaSting টাইপ ব্যবহার করে একটি অবজেক্ট তৈরি করা হয়েছে
  // এখানে height হলো string টাইপ এবং width হলো number টাইপ
  const area1: AreaSting<{ height: string; width: number }> = {
    height: '100',
    width: 50,
  };

  // এইভাবে আমরা টাইপের মাধ্যমে অবজেক্টের গঠন ও মান নির্ধারণ করতে পারি
}
