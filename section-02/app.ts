let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'David';
if (typeof userInput === 'string') {
    userName = userInput;
}

//* Utility function
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error ocurred!', 500);
