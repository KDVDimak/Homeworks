const cards = document.querySelector(".all-cards")

cards.addEventListener("click", function (event){
     if( "readMoreBtn" in  event.target.dataset){
               const card =  event.target.closest(".card")
                card.classList.toggle("expanded") 
                if (card.classList.contains("expanded")){
                        event.target.textContent = "Hide"
                } else event.target.textContent = "Read more"
     }
})