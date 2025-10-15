import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { Usuarios } from "../models/ModelCliente.js";

let formulario = document.getElementById("formulario");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Capturando datos");
        let data = new FormData(formulario);
        let usuario = Object.fromEntries(data);
        Usuarios.push(usuario);
        guardarLocalStorage("usuarios", Usuarios);
        window.location.href = "/views/clientes/js/listado-clientes.html";
        //console.log(Usuarios)
        //console.log(data)
        //console.log(usuario)
        //guardarLocalStorage("usuarios", ["Omega", "Omega2", "Omega3"], JSON.stringify)
    });
}

function listarClientes() {
    let usuarios = consultarLocalStorage("usuarios");
    console.log(usuarios);
}

listarClientes()