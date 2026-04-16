// given the array const fruits = ["mango", "orange", "banana"], write the code to: add 'pineapple' to the end, remove the first item, log the updated array and its length
const fruits = ["mango", "orange", "banana"];
fruits.push("pineapple");
fruits.shift();
console.log(fruits);
console.log(fruits.length);