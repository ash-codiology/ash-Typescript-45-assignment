//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let personName = "ashfa shakeel";

console.log(personName.toUpperCase()); //uppercase

console.log(personName.toLowerCase()); //lowercase

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //titlecase

export{}