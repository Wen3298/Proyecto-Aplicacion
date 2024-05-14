  //aqui se seleccionan todos los elementos img del contendor-imagen y se le agrega click a cada imagen//
  document.querySelectorAll(".contenedor-imagen img").forEach(image=>{
   image.onclick=()=>{
   document.querySelector(".popup-image").style.display="block";
   document.querySelector(".popup-image img").src = image.getAttribute("src");
  }
  // agregue una ventana emergente que se llama popup que se ejecuta al dar click//
  document.querySelector(".popup-image span ").onclick = () => {
  document.querySelector(".popup-image").style.display="none";
 }
  
});