function describeEmpty(value){
        if ( typeof(value) === undefined  ){
            return undefined;
        } else if ( value === null){
            return null;
        } else return value;
}

    describeEmpty(null)
    describeEmpty(undefined)
    describeEmpty(0)
    describeEmpty('')
    describeEmpty([])
    describeEmpty(false)

    console.log(describeEmpty(null));
    console.log(describeEmpty(undefined));
    console.log(describeEmpty(0));
    console.log(describeEmpty(''));
    console.log(describeEmpty([]));
    console.log(describeEmpty(false));

    let userName = 'Anna';// нельзя объявлять переменную и не присваивать ей значение, надо сразу присвоить.
    let userAge = 20;

console.log('name:' + userName);

function getGreeting(name) { // надо в каждой функции return чтобы вернуть результат, если же нет то будет undefined
    return name;
  console.log(`Hello, ${name}`);
}

const message = getGreeting('World');
console.log('message:', message);


const user1 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user2 = {
  name: 'Bob'
  // у Боба немає contact взагалі
};

// Треба вивести email обох:
console.log(user1.contact.email);   // працює: 'anna@example.com'
console.log(user2.email?.());   // undefined
