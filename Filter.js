
function getEvenNumbers(numbers) {

    return numbers.filter((number) => {


        return number % 2 === 0;

    });
}

const numbers = [1,2,3,4,5,6];

const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers);