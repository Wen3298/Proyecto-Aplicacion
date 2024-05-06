const Name = document.getElementById("name")
const correo = document.getElementById("email")
const contrasenia = document.getElementById("password")
const Singupform = document.getElementById("singupform")
const Loginform = document.getElementById("loginform")

let nombreLocalStorage
let CorreoLocalStorage
let ContraseñaLocalStorage

Singupform .addEventListener("submit" ,(e)=>{
    e.preventDefault()
    nombreLocalStorage=localStorage.setItem("nombre", Name.value);
    CorreoLocalStorage = localStorage.setItem("correo", email.value);
    ContraseñaLocalStorage=localStorage.setItem("Contraseña",password.value);

    nombreLocalStorage = localStorage.getItem("nombre");
     
 if (Name.value === nombreLocalStorage){
    return alert ("usuario ya creado")
   
}
  
    alert("Usuario creado Exitosamente ✅")
    
    
})

