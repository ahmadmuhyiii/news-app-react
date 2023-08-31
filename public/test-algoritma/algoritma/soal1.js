function reverseAlphabetWithNumber(inputStr) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let reversedStr = '';
    let number = '';

    for (const char of inputStr) {
        if (alphabet.includes(char)) {
            reversedStr = char + reversedStr;
        } else {
            number = char + number;
        }
    }

    return reversedStr + number;
}

const inputStr = "NEGIE1";
const result = reverseAlphabetWithNumber(inputStr);
console.log(result);  // Output: "EIGEN1"
