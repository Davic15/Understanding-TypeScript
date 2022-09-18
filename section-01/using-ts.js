var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
/*
    TypeScript checks if the element we are about to access is the correct one, so we need to be explicit.
    This ! means to don't double check.
    This HTMLInputElement is a type cast to that type of element.
*/
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
