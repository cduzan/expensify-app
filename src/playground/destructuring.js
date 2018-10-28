//
// Object Destructuring
//

// const person = {
//     name: 'Chris',
//     age: 26,
//     location: {
//         city: 'Philly',
//         temp: 92
//     }   
// };

// // Note: renaming variable and setting default value
// const { name: firstName = 'Anonymous', age } = person;

// // Note: renaming variable. The variables are matched by key, not by order
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}`);

// console.log(`It's ${temperature} in ${city}`);

// Challenge
// const book = {
//     title: 'Ego is the Enemy',
//     auther: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);



//
// Array destructuring
//

// const address = ['1299 South Juniper Street', 'Philidelphia', 'Pennsylvannia', '19147'];

// // Note: order matters in array destructuring. You can skip by leaving empty
// const [ , city, state = 'South Carolina' ] = address;

// console.log(`You are in ${city}, ${state}.`);


// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);