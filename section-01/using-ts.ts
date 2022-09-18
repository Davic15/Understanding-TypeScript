const button = document.querySelector('button')!;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
/*
    TypeScript checks if the element we are about to access is the correct one, so we need to be explicit.
    This ! means to don't double check.
    This HTMLInputElement is a type cast to that type of element.
*/

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener('click', function() {
    console.log(add(+input1.value, +input2.value));
})