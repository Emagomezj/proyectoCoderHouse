//Importar base de datos

const nUser = localStorage.getItem('nUser')

const usrLoad = async () =>{
    try {
        const libros = []
        const endPoint = '../json/db.json'
        const resp = await fetch(endPoint);
        const usrs = await resp.json();
        libros.push(...usrs[nUser].biblioteca);
        return libros;
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error con el servidor',
          icon: 'error',
          confirmButtonText: 'Aceptar' 
        }).then((result) => {
          if(result.isConfirmed){
              window.location.pathname = '/html/biblioteca.html';
          }
        })
      }
}
const libros = await usrLoad()



// Tomar objetos para modificar

const tabla = document.querySelector('#tablaBiblioteca');
const selectCatBib = document.querySelector('#selectCatBib');
const selectValueBib = document.querySelector('#selectValueBib');


//Arreglos de valores

let cat = ['Autor/a','Editorial','Género','Título']
let generoArr = Array.from(new Set (libros.map(elem => elem['Género'])));
let tituloArr = Array.from(new Set (libros.map(elem => elem['Título'])));
let autorArr = Array.from(new Set (libros.map(elem => elem['Autor/a'])));
let editorialArr = Array.from(new Set (libros.map(elem => elem['Editorial'])));



//Función para crear filas

function addRow(obj, clase){
    let row = tabla.insertRow();
    row.classList.add(clase);
    let autor = obj['Autor/a'];
    let titulo = obj['Título']
    let id = obj['ID'];
    let editorial = obj['Editorial'];
    let ed = obj['Edición'];
    let genero = obj['Género'];
    let celId = row.insertCell(0);
    let celTit = row.insertCell(1)
    let celAut = row.insertCell(2);
    let celEditorial = row.insertCell(3);
    let celEd = row.insertCell(4);
    let celGen = row.insertCell(5);

    celId.innerText = id;
    celTit.innerText = titulo;
    celAut.innerText = autor;
    celEditorial.innerText = editorial;
    celEd.innerText = `${ed}° Ed.`;
    celGen.innerText = genero;
}

// Función para actualizar el recuadro de values (2do)

function actualizarOpt(){
    let categoria = selectCatBib.value;
    selectValueBib.innerHTML = '<option selected>Todos los valores</option>';
    tabla.innerHTML = `<tr class="rowHead">
    <td><h4>Id</h4></td>
    <td><h4>Título</h4></td>
    <td>
      <h4>Autor/a</h4>
    </td>
    <td><h4>Editorial</h4></td>
    <td><h4>Edición</h4></td>
    <td><h4>Género</h4></td>`;

    if(cat.indexOf(categoria) < 0){
        for(let i = 0; i < libros.length; i++){
            if(i == 0 || i%2 == 0){
                addRow(libros[i],"rowImpar")
            } else {
                addRow(libros[i],"rowPar")
            }
    }
    } else {
        switch (categoria) {
            case 'Autor/a':
                for(let i = 0; i < autorArr.length; i++){
                let opt = document.createElement('option');
                opt.value = autorArr[i];
                opt.textContent = autorArr[i];
                selectValueBib.appendChild(opt)
                }
                break;
        
            case 'Editorial':
                for(let i = 0; i < editorialArr.length; i++){
                    let opt = document.createElement('option');
                    opt.value = editorialArr[i];
                    opt.textContent = editorialArr[i];
                    selectValueBib.appendChild(opt)
                }
                break;
        
            case 'Género':
                for(let i = 0; i < generoArr.length; i++){
                    let opt = document.createElement('option');
                    opt.value = generoArr[i];
                    opt.textContent = generoArr[i];
                    selectValueBib.appendChild(opt)
                }
                break;

            case 'Título':
                for(let i = 0; i < tituloArr.length; i++){
                    let opt = document.createElement('option');
                    opt.value = tituloArr[i];
                    opt.textContent = tituloArr[i];
                    selectValueBib.appendChild(opt)
                }
                break
        }  
        actualizarVal()
    }
}

//Función actualizar tabla en relación a los filtros aplicados

function actualizarVal(){
    let c = selectCatBib.value
    let v = selectValueBib.value
    tabla.innerHTML = `<tr class="rowHead">
          <td><h4>Id</h4></td>
          <td><h4>Título</h4></td>
          <td>
            <h4>Autor/a</h4>
          </td>
          <td><h4>Editorial</h4></td>
          <td><h4>Edición</h4></td>
          <td><h4>Género</h4></td>`;
    let listLib = []
    switch (c){
        case 'Todas las categorías':
            listLib = libros
            break;
        case 'Título':
           if(v == 'Todos los valores'){
            listLib = libros
           } else {libros.filter(elem => elem['Título'] == v).map(elem => listLib.push(elem))}
           break;
        case 'Autor/a':
            if(v == 'Todos los valores'){
                listLib = libros
               } else {libros.filter(elem => elem['Autor/a'] == v).map(elem => listLib.push(elem))}
            break;
        case 'Editorial':
            if(v == 'Todos los valores'){
                listLib = libros
               } else {libros.filter(elem => elem['Editorial'] == v).map(elem => listLib.push(elem))}
            break;
        case 'Género':
            if(v == 'Todos los valores'){
                listLib = libros
               } else {libros.filter(elem => elem['Género'] == v).map(elem => listLib.push(elem))}
    }
    for(let i = 0; i < listLib.length; i++){
        if(i == 0 || i%2 == 0){
            addRow(listLib[i],"rowImpar")
        } else {
            addRow(listLib[i],"rowPar")
        }
}
}

actualizarOpt()

selectCatBib.addEventListener('change', actualizarOpt)

selectValueBib.addEventListener('change', actualizarVal);
