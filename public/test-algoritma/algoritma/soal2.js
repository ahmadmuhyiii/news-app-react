function longestWord(inputStr) {
    const words = inputStr.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const sentence = "Saya sangat senang berkendara sepeda motor";
const result = longestWord(sentence);
console.log(result);  