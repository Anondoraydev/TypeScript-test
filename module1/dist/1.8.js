"use strict";
{
    //destructuring
    //object destructuring
    var user_1 = {
        id: 1,
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
        },
        hobbies: ['reading', 'traveling', 'cooking'],
    };
    var id = user_1.id, name_1 = user_1.name, city = user_1.address.city; // destructuring object
    //array destructuring
    var myFriends = ['Anondo', 'Sanjana', 'Monika', 'Suman', 'Tanvir'];
    var bestFriend = myFriends[2], rest = myFriends.slice(3); // destructuring array
}
