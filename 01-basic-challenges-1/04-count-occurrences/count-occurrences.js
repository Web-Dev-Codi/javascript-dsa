function countOccurrences(str, char) {
  // let number;

  str.split("").forEach(i => {
    if (char == i) {
      console.log(i);
    }
    return i;
  });

}

module.exports = countOccurrences;
