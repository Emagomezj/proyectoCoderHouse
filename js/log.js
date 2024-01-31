import {usrs} from './db.js'

console.log('hola')

const userInput = document.querySelector('#usr');
const passInput = document.querySelector('#contraseña');
const btnLog = document.querySelector('#btnLogIn');
const chkbx = document.querySelector('#chkbx');
const fVal = document.querySelector('#fVal');
userInput.value = 'algo'
console.log(userInput.value)
console.log(passInput.value)
let casa = 'casa'
console.log(casa)
/***********   Función Login    **************** */
/*
function login(u,c){
    let validation = false
    for(let i = 0; i < usrs.length; i++){
        if(usrs[i].usr == u && usrs[i].pass == c){
            localStorage.setItem('log', 'true');
            localStorage.setItem('name', usrs[i].name);
            localStorage.setItem('email', usrs[i].email);
            validation = true
        };
    };
   if(validation){
//si el checkbox no está checkeado creamos un evento para borrar el log
        if(!chkbx.checked){
            window.addEventListener('beforeunload', function() {
                localStorage.removeItem('log');
                localStorage.removeItem('name');
                localStorage.removeItem('email');
              });
              window.location.href = "../html/biblioteca.html"
        } else {
            //redireccionar a biblioteca
        }
    } else { fVal.innerHTML = `<p> Usuario o contraseña inválidos, por favor intente de nuevo<p>`} 
} 

/********* Event listener de ingresar ************ */
/*
btnLog.addEventListener('click', function(event) {
    event.preventDefault();
    login(userInput.value, passInput.value);
  }); */