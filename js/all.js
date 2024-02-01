const logHeader = document.querySelector('#li_logHeader');
const logHeader_icon = document.querySelector('#a_logHeader');

console.log(window.location.pathname)

if(localStorage.getItem('name')){
  logHeader.innerHTML = `
  <button id="btnDdwn" class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="../img/user.svg" alt="user icon" class="logoUsr" width="40px" style="padding-bottom:10px">
  </button>
  <div id="divDdwn" class="dropdown">
  <ul id='ulDdwn' class="dropdown-menu" style="margin-right: 20px">
    <button id="cerrSesBtn"> Cerrar sesión</button>
  </ul>
  </div>`
  const cerrSesBtn = document.querySelector('#cerrSesBtn');
  const btnDdwn = document.querySelector('#btnDdwn');
  const divDdwn = document.querySelector('#divDdwn');
  const ulDdwn = document.querySelector('#ulDdwn');

  cerrSesBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.pathname = '/index.html'
    //location.reload()
  })
  
  cerrSesBtn.style.background = 'none';
  cerrSesBtn.style.shadow = 'none';
  cerrSesBtn.style.color= 'white';
  btnDdwn.style.display = 'flex'
  btnDdwn.style.background = 'none';
  btnDdwn.style.border = 'none';
  divDdwn.style.background = 'none';
  divDdwn.style.display = 'flex'
  ulDdwn.style.border = '2px solid black';
  ulDdwn.style.background = 'black';
} else {
    if(window.location.pathname == '/html/biblioteca.html'){
      window.location.pathname = '/html/log-in.html'
    }
    /*
    // Evento al pasar el cursor sobre el elemento
     logHeader_icon.addEventListener('click', ()=> {
      window.location.pathname = '/log-in.html';
      console.log('has hecho click')
     })
     logHeader.addEventListener('mouseover', function() {logHeader_icon.innerHTML = `<i class='bi bi-door-open-fill logIcon1' style='color: #800000'></i>`;
      });
    // Evento al alejar el cursor del elemento
    logHeader.addEventListener('mouseout', function() {
      logHeader_icon.innerHTML = 
      `<i class='bi bi-door-closed-fill logIcon1'></i>`;
    }); */
}













