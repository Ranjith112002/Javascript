function findEvenNumberGreaterThan30(numbers) {
  return numbers.find((num) => num % 2 === 0 && num > 30);
}

let arr = [40, 20, 2, 50, 30];

let result = findEvenNumberGreaterThan30(arr);

console.log(result);