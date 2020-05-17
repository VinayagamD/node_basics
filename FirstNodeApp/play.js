const name = 'Max';
let age = 29;
const hasHobbies = true;


const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        `Name is ${userName}, age is ${userAge}, hasHobbies ${userHasHobbies}`);
}

const add = (a, b) => a + b;
const addOne = a => a + 1;

console.log(add(1, 2));
console.log(addOne(1));
console.log(summarizeUser(name, age, hasHobbies));