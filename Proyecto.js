

 const Nombre = document.getElementById("name")
 const Correo = document.getElementById("email")
 const contrasenia = document.getElementById("password")
 const btnIngresar = document.getElementById("btnIngresar")
// creamos el localstogare con el nombre de datos//
    let datosLocalStorage = JSON.parse(localStorage.getItem("registro")) || []
    // despues creamos una función donde van a ir todos los datos que queremos guardar en el localsotage//
    function guardarInfoUsuarios() {

        let datosUsuario = {
            nombre: Nombre.value,
            correo: Correo.value,
            clave: contrasenia.value
        }
        datosLocalStorage.push (datosUsuario)

        localStorage.setItem("registro",JSON.stringify(datosLocalStorage))
    }
    // esta función lo que hace es validar si el nombre ingresado ya estaba registrado//
    function validar() {
        datosLocalStorage.find(registro=>registro.nombre===Nombre.value)

        
    }
    // este evento es para guardar los usuarios al dar click//

btnIngresar.addEventListener("click",()=>{
    guardarInfoUsuarios();


})

