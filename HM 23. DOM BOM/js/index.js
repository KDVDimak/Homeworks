const items = document.querySelectorAll("li")
let arr = [];
        for ( let item of items ){
            console.log(item)
                arr.push(item.textContent)
        }
        console.log(items.length)
        console.log(arr)