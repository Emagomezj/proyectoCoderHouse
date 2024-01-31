const logHeader = document.querySelector('#li_logHeader');
const logHeader_icon = document.querySelector('#a_logHeader')
const logIcon = document.querySelector('#logicon')





   // Evento al pasar el cursor sobre el elemento
   logHeader.addEventListener('mouseover', function() {logIcon.innerHTML =   
    logHeader_icon.innerHTML = `<i class='bi bi-door-open-fill logIcon1' style='color: #800000'></i>`;
    });
  // Evento al alejar el cursor del elemento
  logHeader.addEventListener('mouseout', function() {
    logHeader_icon.innerHTML = 
    `<i class='bi bi-door-closed-fill logIcon1'></i>`;
  });

