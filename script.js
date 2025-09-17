let campoForm = document.querySelectorAll(".formulario__entrada");

/* campoForm.forEach(function(campoForm){
    console.log(campoForm)
})

campoForm.forEach((campoForm)=>{
    console.log(campoForm)
}) */

    campoForm.forEach((campoForm) =>{
        campoForm.addEventListener("keyup", function(){
            console.log("Key pressed")
        })
    })
