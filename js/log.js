import libros from './biblioteca.js'
const usrInput = document.querySelector('#usr');
const passInput = document.querySelector('#contraseña');
const btnLog = document.querySelector('btnLogin');

const dataLog = [
{
    usr: 'admin',
    pass: '1234',
    name: 'Admin',
    sname: 'Ad',
    email: 'admin@admin.com'
}
];

let log = false;

