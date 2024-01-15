const libros = [
    {
        'ID': '001',
        'Título': 'Los días del venado',
        'Autor/a': 'Bodoc, L.',
        'Editorial': 'De Bolsillo',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '002',
        'Título': 'Los días del fuego',
        'Autor/a': 'Bodoc, L.',
        'Editorial': 'De Bolsillo',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '003',
        'Título': 'Los días de la sombra',
        'Autor/a': 'Bodoc, L.',
        'Editorial': 'De Bolsillo',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '004',
        'Título': 'Tiempo de búhos',
        'Autor/a': 'Bodoc, L.',
        'Editorial': 'De Bolsillo',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '005',
        'Título': 'El silmarillion',
        'Autor/a': 'Tolkien, J.R.R.',
        'Editorial': 'Planeta',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '006',
        'Título': 'El hobbit',
        'Autor/a': 'Tolkien, J.R.R.',
        'Editorial': 'Planeta',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '007',
        'Título': 'La comunidad del anillo',
        'Autor/a': 'Tolkien, J.R.R.',
        'Editorial': 'Planeta',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '008',
        'Título': 'Las dos torres',
        'Autor/a': 'Tolkien, J.R.R.',
        'Editorial': 'Planeta',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '009',
        'Título': 'El retorno del rey',
        'Autor/a': 'Tolkien, J.R.R.',
        'Editorial': 'Planeta',
        'Edición': '1',
        'Género': 'Ficción'
    },
    {
        'ID': '010',
        'Título': 'La voluntad del saber',
        'Autor/a': 'Foucault, M.',
        'Editorial': 'Siglo XXI',
        'Edición': '1',
        'Género': 'Ensayo'
    },
    {
        'ID': '011',
        'Título': 'La agonía del Eros',
        'Autor/a': 'Han, B.',
        'Editorial': 'Herder',
        'Edición': '1',
        'Género': 'Ensayo'
    }
];

//Arreglos de valores

let cat = ['Autor/a','Editorial','Género','Título']
let generoArr = Array.from(new Set (libros.map(elem => elem['Género'])));
let tituloArr = Array.from(new Set (libros.map(elem => elem['Título'])));
let autorArr = Array.from(new Set (libros.map(elem => elem['Autor/a'])));
let editorialArr = Array.from(new Set (libros.map(elem => elem['Editorial'])));

//Filtros

function filtroGenero(gen){
    ind = generoArr.indexOf(gen)
    return ind >= 0 ? libros.filter(elem => {if(elem['Género'] == generoArr[ind]){return true}}) : 'No se encuentra en la biblioteca ningún libro del género buscado.'
};

function filtroAutor(aut){
    ind = autorArr.indexOf(aut)
    return ind >= 0 ? libros.filter(elem => {if(elem['Autor/a'] == autorArr[ind]){return true}}) : 'No se encuentra en la biblioteca ningún libro esctiro por el/la autor/a.'
};

function filtroTitulo(tit){
    ind = tituloArr.indexOf(tit)
    return ind >= 0 ? libros.filter(elem => {if(elem['Título'] == tituloArr[ind]){return true}}) : 'No se encuentra en la biblioteca el título buscado.'
};

function filtroEditorial(ed){
    ind = editorialArr.indexOf(ed)
    return ind >= 0 ? libros.filter(elem => {if(elem['Editorial'] == ed){return true}}) : 'No se encuentra en la biblioteca ningún libro de la editorial buscada.'
};

console.log(filtroTitulo('La voluntad del saber'))

let categoria = prompt('Ingrese que categoría desea buscar');

if(cat.indexOf(categoria) >= 0){
    switch (categoria) {
        case 'Autor/a':
            let aut = prompt('¿Qué autor/a desea buscar?');
            if(autorArr.indexOf(aut) >= 0){
                alert(filtroAutor(aut).map(elem => elem['Título']).join(', '));
            } else{
                alert('No se encuentra en la biblioteca ningún libro esctiro por el/la autor/a. Los autores que pueden buscarse actualmente son:\nBodoc, L.\nHan, B.\nFoucault, M.\nTolkien, J.R.R')
            }
            break;
        
        case 'Editorial':
            let ed = prompt('¿Qué editorial desea buscar?');
            if(editorialArr.indexOf(ed) >= 0){
                alert(filtroEditorial(ed).map(elem => elem['Título']).join(', '));
            } else {
                alert('No se ha encontrado ningún libro de la editorial buscada. Las editoriales que pueden buscarse actualmente son:\nDe Bolsillo\nPlaneta\nSiglo XXI\nHerder')
            }
            break;
        
        case 'Género':
            let gen = prompt('¿Qué género desea buscar?');
            if(generoArr.indexOf(gen) >= 0){
                alert(filtroGenero(gen).map(elem => elem['Título']).join(', '))
            } else {
                alert('No se ha encontrado ningún libro que corresponda al género buscado. Los géneros que pueden buscarse actualmente son:\nFicción\nEnsayo')
            }
            break;

        case 'Título':
            let tit = prompt('¿Qué título desea buscar?');
            if(tituloArr.indexOf(tit) >= 0){
                alert(filtroTitulo(tit).map(elem => elem['Título']) + ', de ' + filtroTitulo(tit).map(elem => elem['Autor/a']) + ', está disponible')
            } else {
                alert('No se ha encontrado el título buscado.')
            }
            break
    }
} else {
    alert('Por favor ingrese una categoría válida. Las mismas son: Autor/a, Editorial, Género, Título.')
}

