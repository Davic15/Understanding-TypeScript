function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

//* Callbadk definition.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(5, 12));

//* function type we can do it with an arrow function.
//* It describes a function.
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
})