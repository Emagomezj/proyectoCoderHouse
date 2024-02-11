/************* Declarar constantes para cada elemento del DOM ***************** */

const userInput = document.querySelector('#user');
const passInput = document.querySelector('#contraseña');
const btnLog = document.querySelector('#btnLogIn');
const chkbx = document.querySelector('#chkbx');
const fVal = document.querySelector('#fVal');
const main = document.querySelector('main')
const loader = document.querySelector('#divLoaderLog')

/********* Si estas logueado que redirija ******** */

if(localStorage.getItem('name')){
    window.location.pathname = '/proyectoCoderHouse/html/biblioteca.html'
  }

/***********   Función Login    **************** */

function login(u,c,a){
    let validation = false
    for(let i = 0; i < a.length; i++){
        if(a[i].usr == u && a[i].pass == c){
            localStorage.setItem('nUser', i);
            localStorage.setItem('log', 'true');
            localStorage.setItem('name', a[i].name);
            localStorage.setItem('email', a[i].email);
            validation = true;
            console.log('Inicio de sesión exitoso')
            removeLoader();
            Swal.fire({
                title: "¡Bienvenidx!",
                text: "¡Ha iniciado sesión con éxito!",
                icon: "success",
                showConfirmButton: false
              }).then((result) => {
                if(result.isConfirmed){
                    window.location.pathname = '/proyectoCoderHouse/html/biblioteca.html';
                }
              });
              setTimeout(() => {
                Swal.close();
              }, 800);
              setTimeout(()=>{
                window.location.pathname = '/proyectoCoderHouse/html/biblioteca.html';
              }, 801)
        }
    }
    if(!validation){
        fVal.innerHTML = `<p> Usuario o contraseña inválidos, por favor intente otra vez</p>`
    }
}

/* ******* Creación Funciones loader ************ */
let displayLoader = () => {
  loader.setAttribute("style", "visibility: visible");
} 

let removeLoader = () => {
  loader.setAttribute("style", "visibility: hidden");
}

/************* Func Async-Await Fetch ************ */

const logEvent = async () => {
  displayLoader();
  try {
    const endPoint = '../json/db.json'
    const resp = await fetch(endPoint);
    const usrs = await resp.json();
    removeLoader();
    login(userInput.value,passInput.value, usrs);
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'Ha ocurrido un error con el servidor',
      icon: 'error',
      confirmButtonText: 'Aceptar' 
    }).then((result) => {
      if(result.isConfirmed){
          window.location.pathname = '/proyectoCoderHouse/html/log-in.html';
      }
    })
  }
}

/******************** Creación del event listener al presionar el botón *************************/

btnLog.addEventListener('click', (event) =>{
  event.preventDefault();
  fVal.innerHTML = ``
  logEvent()
})

