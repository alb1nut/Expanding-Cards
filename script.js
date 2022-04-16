// to call all panel class
const panels = document.querySelectorAll('.panel')

// to loop through each panel item to apply active class
panels.forEach((panel)=> {
   
    panel.addEventListener('click', () =>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

// Function for removing a class
function removeActiveClass(){
   panels.forEach((panel)=>{
       panel.classList.remove('active')
   } )
}