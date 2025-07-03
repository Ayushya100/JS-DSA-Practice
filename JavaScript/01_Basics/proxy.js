const user = {
    name: 'Ayushya',
    age: 27,
    password: '123'
};

const proxyUser = new Proxy(user, {                         // user is a target object
    get(target, prop) {
        if (prop === 'password') {
            throw new Error('Access Denied');
        }
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`${target} - ${prop} - ${value}`);
    }
});

console.log(proxyUser.name);
proxyUser['occupation'] = 'Engineering';
console.log(proxyUser.password);
