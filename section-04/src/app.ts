// Code goes here!
//const userName = 'David';
//let age = 34;
//console.log(userName)

/*function add(a: number, b: number) {
    // var has global and function (local) scope.
    var result;
    result = a + b;
    return result;
}*/

//if (age > 20) {
    // let has block scope, only works in the block { } that was defined
    // it means inside if statements, for statements.
    //let isOld = true;
//}

// default value
//const add = (a: number, b: number = 1) => a + b

//console.log(add(2, 5))

//const printOutput: (a: number | string) => void = output => console.log(output)

//* It should be the last argument, not the first one.
//printOutput(add(5));

//* Spread operator
const hobbies = ['Sport', 'Cooking'];
console.log(hobbies[0]);
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies)
console.log(activeHobbies)

const person = {
    firstname: 'David',
    age: 34
};

const copiedPerson = {...person};

console.log(copiedPerson);


//* Rest operator
const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
}

const addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers)


const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)

const {firstname, age} = person
console.log(firstname, age)