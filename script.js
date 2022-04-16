// to call all card class
const cards = document.querySelectorAll('.card')

// to loop through each card item to apply active class
cards.forEach((card)=> {
   
    card.addEventListener('click', () =>{
        removeActiveClass()
        card.classList.add('active')
    })
})

// Function for removing a class
function removeActiveClass(){
   cards.forEach((card)=>{
       card.classList.remove('active')
   } )
}