var userInput;
var userName;
userInput = 5;
userInput = 'David';
if (typeof userInput === 'string') {
    userName = userInput;
}
//* Utility function
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error ocurred!', 500);
console.log(result);
