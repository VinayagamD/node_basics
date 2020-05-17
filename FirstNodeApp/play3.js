const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi , I am ' + this.name);
    }
};

const printName = (person) => {
    console.log(person.name);
}

printName(person);