// write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in the exact format "LASTNAME, Firstname". Test: formatName(' esther ', ' ogbu ') should return 'OGBU, Esther'
function formatName(firstName, lastName) {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    return `${trimmedLastName.toUpperCase()}, ${trimmedFirstName.charAt(0).toUpperCase() + trimmedFirstName.slice(1).toLowerCase()}`;
}
const formattedName = formatName(' esther ', ' ogbu ');
console.log(formattedName);
