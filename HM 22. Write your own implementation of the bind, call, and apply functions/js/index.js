function showName(){
    
    return ` ${this.name}, ${this.age}, ${this.city}, `
}

const user = {
    name:"Dima",
    age: 20,
    city:"Odessa",
    tempFunction: showName
}
 

function myCall(showName, user, ...args) {
    user.tempFunction = showName
    const result = user.tempFunction(...args)
    delete user.tempFunction
    return result
}

function myApply(showName, user, args) {
    user.tempFunction = showName
    const result = user.tempFunction(...args)
    delete user.tempFunction
    return result
}

function myBind(showName, user, args) {
        function newFunct() {
            user.tempFunction = showName
            const result = user.tempFunction(...args)
            delete user.tempFunction
            return result 
        }
       return newFunct
}