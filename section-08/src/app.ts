//* Decorator are about classes
//* Decorators are function that applies in a certain way.
//* Decorators are called when the class is defined.
//* Decorators are executed bottom up, when they are many.

function Logger(logString: string) {
    //* Factory Decorator
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('Rendering template.')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

//* @ is a special identifier, and point to out decorator, it uses arguments
@Logger ('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'David';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers)


function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product {
    //* Log is executes when it is registed in JavaScript
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error ('Invalid price - should be positive.')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}