const transpose = function(matrix) {
  let result = [];
  for (let y = 0; y < matrix[0].length; y++) {
    result[y] = [];

    for (let x = 0; x < matrix.length; x++) {
      result[y][x] = matrix[x][y];
    }
  }
  return result;
};
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  const reverseString = (element) => element.split("").reverse().join("");

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;
  }
  return false;

};


module.exports = wordSearch;