//create an object called myProfile with at least 4 properties: name, age, country, and hobby. then you write a function displayProfile(person) that logs a sentence describing the person using their properties
const myProfile = {
    name: "Niijima",
    age: 22,
    country: "Egypt",
    hobby: "coding"
};
function displayProfile(person) {
    console.log(`${person.name} is ${person.age} years old, lives in ${person.country}, and enjoys ${person.hobby}.`);
}
displayProfile(myProfile);