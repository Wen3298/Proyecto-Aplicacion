const Correo = document.getElementById("emailLogin")
const Contrasenia = document.getElementById("passwordLogin")
const btnIngresar = document.getElementById("btnIngresarr")

let datosLocalStorage = JSON.parse(localStorage.getItem("registro")) 
//esta parte del cogigo se encarga de dar validación a los datos ingresados en la parte del registro  si los datos son iguales lo redirecciona la pagina pricipal de la galeria de fotos //
function IniciarSesion(){
    for (let index = 0; index < datosLocalStorage.length; index++) {
        if(Correo.value === datosLocalStorage[index].correo && Contrasenia.value === datosLocalStorage[index].clave){
            window.location.href = "index.html"
        }
    }
}
// este evento al dar click me envia a la pagina pricipal de la galeria de fotos//
btnIngresar.addEventListener("click",()=>{
    IniciarSesion()
})





