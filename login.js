const Correo = document.getElementById("emailLogin")
const Contrasenia = document.getElementById("passwordLogin")
const btnIngresar = document.getElementById("btnIngresarr")

let datosLocalStorage = JSON.parse(localStorage.getItem("registro")) 

function IniciarSesion(){
    for (let index = 0; index < datosLocalStorage.length; index++) {
        if(Correo.value === datosLocalStorage[index].correo && Contrasenia.value === datosLocalStorage[index].clave){
            window.location.href = "index.html"
        }
    }
}

btnIngresar.addEventListener("click",()=>{
    IniciarSesion()
})





