let element = document.querySelector("div")
let inputEl = document.querySelector("input")

inputEl.addEventListener("focus", function(){
    element.style.display = "block"

})
inputEl.addEventListener("blur", function(){
    element.style.display = "none"

})