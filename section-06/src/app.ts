type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

//* The type ElevatedEmployee is type Adming and Employee
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'David',
    privileges: ['Create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): number;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    //* Type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add(1, 2);
console.log(result)

const fetchedUserData = {
    id: 'u1',
    name: 'David',
    job: { title: 'CEO', description: 'My company'}
};
console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData)

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {    
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    /*if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000)
    }*/
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    //* Discrimination Union, it describes the object
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    //* Discrimination Union, it describes the object
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
        break;
        case 'horse':
            speed = animal.runningSpeed;
        break;
    }
    console.log('Moving speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})


//* TypeCasting
//* TS knows it is just and HTML element
//* version 1
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//* version 2
//* The ! tells TypeScript it wont be null
const userInputElement = document.getElementById('user-input') as HTMLInputElement;
if (userInputElement) {
    userInputElement.value = 'Hi there'
}


//* Index Properties
//* Flexible container
interface ErrorContainer {
    //* Index Type
    //* "I don't know the property name, but it is a string and the value is also a string".
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!.',
    username: 'Must start with a capital character!'
}

console.log(errorBag)



console.log(e1)