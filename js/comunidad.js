const divLoader = document.querySelector('#divLoader');
const mainComunidad = document.querySelector('#mainComunidad');

mainComunidad.setAttribute("style", "visibility: hidden");

window.addEventListener("load", (event) => {
    setTimeout(()=>{
        console.log("page is fully loaded");
        divLoader.remove();
        mainComunidad.setAttribute("style", "visibility: visible");
    },3000)
  });


// setTimeout(function () {
//     divLoader.remove
//   }, 2000);