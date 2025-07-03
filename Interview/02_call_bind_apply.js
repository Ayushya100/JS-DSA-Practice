// Interview Question 1
const person = {
    name: 'John',
    age: 29
};

function introduce(interest, hobby) {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I like ${interest} and my hobby is ${hobby}.`);
}

introduce('science', 'music');

// Call function directly binds the new context with the called function and execute it.
introduce.call(person, 'math', 'chess');

// Apply function works same as call but the parameters are passed in an array
introduce.apply(person, ['science', 'painting']);

// Bind function returns a new function binded with the provided new context.
const bindedFunction = introduce.bind(person, 'literature');
bindedFunction('writing');


// Interview Question - 2
const personObj = {
    name: 'Alice',
    age: 21,
    introduce: function(interest, hobby) {
        console.log(`My name is ${this.name} and I'm ${this.age} years old. I like ${interest} and my hobby is ${hobby}.`);
    }
};

personObj.introduce('science', 'music');

personObj.introduce.call(person, 'math', 'chess');
personObj.introduce.apply(person, ['science', 'painting']);

const introduceMethod = personObj.introduce.bind(person);
introduceMethod('literature', 'writing');
