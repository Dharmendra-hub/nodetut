//Simple Object
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
// console.log(person.sayHello());
// console.log(person.tellAge());

const hobbies = [function () { return "hey" }, "Songs", "Code", "Learn", "Travel",];

//Copy using Slice
const newArr = hobbies.slice();
//console.log(newArr);

//Spread operator
const copiedArray = [...hobbies];
//console.log(copiedArray);

//Rest Operator
// example arguments to array
const toArray = (...args) => {
    return args;
}
//console.log(toArray(1, 2, 3, 4));

//Object Destructuring works based on key
const { name, sayHello } = person;
//console.log(name, sayHello);

//Array Destructring works based on index
const [value1, value2] = hobbies;
//console.log(value1, value2);

//Asyn to sync code example
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    return promise; //in promise we always have to return
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(cb_response => {
        console.log(cb_response);
    });
}, 2000);