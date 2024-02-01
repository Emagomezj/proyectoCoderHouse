import { usrs } from "./db.js";


const userInput = document.querySelector('#user');
const passInput = document.querySelector('#contraseña');
const btnLog = document.querySelector('#btnLogIn');
const chkbx = document.querySelector('#chkbx');
const fVal = document.querySelector('#fVal');
let casa = 'casa'

/********* Si estas logueado que redirija ******** */

if(localStorage.getItem('name')){
    window.location.pathname = '/html/biblioteca.html'
  }

/***********   Función Login    **************** */

function login(u,c){
    let validation = false
    for(let i = 0; i < usrs.length; i++){
        if(usrs[i].usr == u && usrs[i].pass == c){
            localStorage.setItem('nUser', i);
            localStorage.setItem('log', 'true');
            localStorage.setItem('name', usrs[i].name);
            localStorage.setItem('email', usrs[i].email);
            let validation = true;
            console.log('Inicio de sesión exitoso')
            Swal.fire({
                title: "¡Bienvenidx!",
                text: "¡Ha iniciado sesión con éxito!",
                icon: "success"
              }).then((result) => {
                if(result.isConfirmed){
                    window.location.pathname = '/html/biblioteca.html';
                }
              });
        }
    }
    if(!validation){
        fVal.innerHTML = `<p> Usuario o contraseña inválidos, por favor intente otra vez</p>`
    }
}

btnLog.addEventListener('click', (event) =>{
    event.preventDefault()
    login(userInput.value,passInput.value)
})

