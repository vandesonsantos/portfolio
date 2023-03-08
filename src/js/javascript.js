const subTitulo = document.querySelector('[sub-titulo]')

function escrita(){
    tituloArray = subTitulo.innerHTML.split('')
    subTitulo.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            subTitulo.innerHTML += letra
        }, i * 90)
    })
}

escrita();