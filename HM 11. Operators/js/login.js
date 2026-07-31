let email = "user@gmail.com";
let password = "123321123";
let isEmailVerified = true;

  let  canLogin = email !== "" && password !== "" && isEmailVerified;

    if (canLogin === true){
        console.log("Логін успішний");
    } else console.log("Перевірте дані");