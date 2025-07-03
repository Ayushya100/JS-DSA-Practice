const company = {
    name: 'ABC inc.',
    salary: function() {
        console.log(`500k Salary`);
    }
};


// Interview Question - 1 - __proto__
const engineer1 = {
    empId: 123,
    task: function() {
        console.log('Task assigned');
    }
};

engineer1.__proto__ = company;
console.log(engineer1);
engineer1.task();
engineer1.salary();


// Interview Question - 2 - Object.create
const engineer2 = Object.create(company, {
    empId: { value: 456 },
    task: {
        value: function() {
            console.log('Task assigned');
        }
    }
});

console.log(engineer2);
engineer2.task();
engineer2.salary();


// Interview Question - 3 - setPrototypeOf
const engineer3 = {
    empId: 789,
    task: function() {
        console.log('Task assigned');
    }
};

Object.setPrototypeOf(engineer3, company);
console.log(engineer3);
engineer3.task();
engineer3.salary();


// Interview Question - 4 - Multiple Prototypal Inheritance
const orgainization = {
    orgName: 'Tech Group',
    location: 'Global',
    info: function() {
        console.log(`Organization: ${this.orgName}, Location: ${this.location}`);
    }
}

Object.setPrototypeOf(company, orgainization);

console.log(engineer3);
engineer3.task();
engineer3.salary();
engineer3.info();


// Interview Question - 5 - getPrototypeOf
const prototypeList = Object.getPrototypeOf(engineer3);
console.log(prototypeList);


// Prototype Shadowing
const person1 = {
    name: 'ABC',
    __proto__: {
        name: 'XYZ',
        __proto__: {
            type: 'type new'
        }
    }
};

console.log(person1);
console.log(person1.name);
console.log(person1.type);
