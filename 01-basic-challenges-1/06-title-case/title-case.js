function titleCase(str) {
    //Split the words and to lower case
    // ['the', 'quick', 'brown', 'fox']
    const words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        // i is each full word equaling index 0 1 2 3 

        // Capitalizes the first letter in each word
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    }

    return words.join(' ');
}

module.exports = titleCase;
