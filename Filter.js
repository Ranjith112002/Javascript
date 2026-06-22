function getEvenNumbers(numbers) {
  return numbers.filter((number) => {
    return number % 2 === 0;
  });
}
const numbers = [1, 10, 30, 5, 4, 3, 9];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);
