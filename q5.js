///use the map() method on the numbers array; const numbers = [3, 6, 9, 12, 15]; to create a new array where every number is doubled. log the new array. do not change the original
const numbers = [3, 6, 9, 12, 15];
const doubledNumbers = numbers.map((num) => {
    return num * 2;
});
console.log(doubledNumbers);
console.log(numbers);