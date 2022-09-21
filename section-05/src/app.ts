//* Interface: describe the structure of an object.
//* it is from TypeScript

/*interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}
*/


interface AddFn {
    (a: number, b: number): number
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string;
    //* optional parameter
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

//class Person implements Greetable, Named {
class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n
    }
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name)
    }
}

//* we can use the interface as a type
let user1: Greetable;
user1 = new Person('David')

user1.greet('Hi there - I am')