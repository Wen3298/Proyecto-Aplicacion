

 const Nombre = document.getElementById("name")
 const Correo = document.getElementById("email")
 const contrasenia = document.getElementById("password")
 const btnIngresar = document.getElementById("btnIngresar")

    let datosLocalStorage = JSON.parse(localStorage.getItem("registro")) || []
 
    function guardarInfoUsuarios() {
        let datosUsuario = {
            nombre: Nombre.value,
            correo: Correo.value,
            clave: contrasenia.value
        }
        datosLocalStorage.push(datosUsuario)

        localStorage.setItem("registro",JSON.stringify(datosLocalStorage))
    }

btnIngresar.addEventListener("click",()=>{
    guardarInfoUsuarios();


})

