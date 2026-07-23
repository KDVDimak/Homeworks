    // ZAVD 1-2 
    
    const name = "Dima";  // const, потому что имя не меняется
    const surname  = "Kryvonos";  // const, потому что фамилия тоже не меняется
    let age = 20;  // let, потому что возраст меняется каждый год
    let city = "Rostock";  // let, потому что город в котором живу тоже может поменяться 
    let hobby = "Basketball"  // let, хобби тоже может со временем поменяться
    const yearOfBirth = 2006;  // const, потому что год не может поменяться никак 
    let color = "green";  // let, потому что цвет может поменяться

console.log(name);
console.log(surname);
console.log(age);
console.log(city);
console.log(hobby);
console.log(yearOfBirth);
console.log(color);


// ZAVD 3 
// 3.1 

    age = 21; 
    console.log(age);

// 3.2

    // yearOfBirth = 1999;
    // console.log(yearOfBirth); //TypeError: Assignment to constant variable.

// 3.3

    // let name = "Dima";
    // console.log(name); // SyntaxError: Identifier 'name' has already been declared


// ZAVD 6

console.log( "Привіт! Мене звати " + name + " " + surname + ", " + "мені " + age + " рік, живу у " + city + "." );