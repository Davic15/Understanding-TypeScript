//* Decorator are about classes
//* Decorators are function that applies in a certain way.
//* Decorators are called when the class is defined.
function Logger(logString: string) {
    //* Factory Decorator
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
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
