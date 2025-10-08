import {expresionRegulares} from "./services/utils.js"

localStorage.setItem("usuarios", JSON.stringify({nombre: "Omega", contrasena: "Contraseña"}))
//permite entrar usuario establecido

let campoForm = document.querySelectorAll(".formulario__entrada");

/* campoForm.forEach(function(campoForm){
    console.log(campoForm)
})

campoForm.forEach((campoForm)=>{
    console.log(campoForm)
}) */

    campoForm.forEach((campoForm) =>{
        campoForm.addEventListener("keyup", function(e){
            //console.log("Key pressed");
            //console.log(e);
            //console.log(e.target.id);
            switch(e.target.id){
                case "nombre":
                    //console.log("Input nombre")
                    if(expresionRegulares.textoRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("nombre").style.backgroundColor = "#90EE90"
                        document.getElementById("nombre").style.outline = "none"
                        document.getElementById("nombre").style.borderColor = "#106510"
                        document.getElementById("nombre").style.borderWidth = "2px"
                        document.getElementById("nombre").style.color = "black"
                    }else{
                        console.log("No cumple la expression regular");
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                    }
                    break;
                case "apellido":
                    if(expresionRegulares.textoRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("apellido").style.backgroundColor = "#90EE90"
                        document.getElementById("apellido").style.outline = "none"
                        document.getElementById("apellido").style.borderColor = "#106510"
                        document.getElementById("apellido").style.borderWidth = "2px"
                        document.getElementById("apellido").style.color = "black"
                    }else{
                        console.log("No cumple la expression regular");
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                    }
                    break;
                    case "documento":
                        if(expresionRegulares.numeroRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("documento").style.backgroundColor = "#90EE90"
                        document.getElementById("documento").style.outline = "none"
                        document.getElementById("documento").style.borderColor = "#106510"
                        document.getElementById("documento").style.borderWidth = "2px"
                        document.getElementById("documento").style.color = "black"
                        }else{
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                        }
                    break;
                        case "telefono":
                        if(expresionRegulares.numeroRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("telefono").style.backgroundColor = "#90EE90"
                        document.getElementById("telefono").style.outline = "none"
                        document.getElementById("telefono").style.borderColor = "#106510"
                        document.getElementById("telefono").style.borderWidth = "2px"
                        document.getElementById("telefono").style.color = "black"
                        }else{
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                        }
                    break;

            }
        })
    })
