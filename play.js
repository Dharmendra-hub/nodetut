const person = {
    name: "Dharmendra",
    age: 25,
    sayHello() {
        console.log('Hello I am ' + this.name);
    },
    tellAge: function () {
        console.log('My age is ' + this.age);
    }
};

console.log(person.sayHello());
console.log(person.tellAge());