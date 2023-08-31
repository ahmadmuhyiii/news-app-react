function countWordsInInput(input, query) {
    const wordCounts = {};

    // hitung jumlah kata di array input
    for (const word of input) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    // hitung jumlah kata di array query
    const output = [];
    for (const word of query) {
        output.push(wordCounts[word] || 0);
    }

    return output;
}

const INPUT = ['yc', 'dj', 'aaa', 'dj'];
const QUERY = ['aaa', 'es', 'dj'];

const output = countWordsInInput(INPUT, QUERY);
console.log(output);
