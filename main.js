
function whereIsWaldo(item, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === item) {
        return [i+1, j+1]; // Return the row and column index
      }
    }
  }
  return [-1, -1]; // Return [-1, -1] if the item is not found
}

// Example usage:
let example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["B", "A", "A"],
];

console.log(whereIsWaldo("B", example));

let example2 = [
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
];
console.log(whereIsWaldo("d", example2));

