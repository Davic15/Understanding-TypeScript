//* Object types describe the type of object
/*const person: {
    name: string;
    age: number;
} = {
    name: 'David',
    age: 34
};*/
/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'David',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};*/

//* The number increase starting from 0, or we can use our own number or use or own label
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 }

const person = {
    name: 'David',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


// Array of strings
//let favoriteActivities: string[];
let favoriteActivities: any[];
favoriteActivities = ['Video Games'];

console.log(person.hobbies);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('Admin')
}