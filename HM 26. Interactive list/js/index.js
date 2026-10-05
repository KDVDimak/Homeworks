const input = document.querySelector(".in")
const button = document.querySelector(".inpbut")
const list = document.querySelector(".list")

button.addEventListener("click", function(event){
    const infInput = input.value
    const li = document.createElement("li")
    const deleteButton = document.createElement("button")
        deleteButton.textContent = "✖"
        deleteButton.dataset.deleteButton = ""
        deleteButton.classList.add("but")
        li.textContent = infInput
        li.append(deleteButton)
        list.append(li)
        input.value = ""
})

list.addEventListener("click", function(event){
      if (event.target.matches("li")){
            event.target.classList.toggle("selected")
      }
      if ("deleteButton" in event.target.dataset){
            const closest = event.target.closest("li")
            closest.remove()
      }
})