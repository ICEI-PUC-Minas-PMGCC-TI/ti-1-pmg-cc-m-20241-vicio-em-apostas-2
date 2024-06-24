function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            noticias: []
        };
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirNoticia() {
    let objDados = leDados();

    let strId = document.querySelector('.id').value;
    let strCategoria = document.querySelector('.categoria').value;
    let strTitulo = document.querySelector('.Titulo').value;
    let strSite = document.querySelector('.Site').value;
    let strDescricao = document.querySelector('.descricao').value;

    let novaNoticia = {
        id: strId,
        categoria: strCategoria,
        titulo: strTitulo,
        site: strSite,
        descricao: strDescricao
    };

    objDados.noticias.push(novaNoticia);

    salvaDados(objDados);

    imprimeNoticias();
}

function imprimeNoticias() {
    let table = document.querySelector('.news-table');
    let objDados = leDados();
    let strHtml = '';

    for (let i = 0; i < objDados.noticias.length; i++) {
        strHtml += `
            <tr>
                <td>${objDados.noticias[i].id}</td>
                <td>${objDados.noticias[i].categoria}</td>
                <td>${objDados.noticias[i].titulo}</td>
                <td>${objDados.noticias[i].site}</td>
                <td>${objDados.noticias[i].descricao}</td>
            </tr>
        `;
    }

    table.innerHTML = strHtml;
}

document.querySelector('.button1').addEventListener('click', incluirNoticia);
document.querySelector('.button4').addEventListener('click', () => {
    document.querySelector('.id').value = '';
    document.querySelector('.categoria').value = '';
    document.querySelector('.Titulo').value = '';
    document.querySelector('.Site').value = '';
    document.querySelector('.descricao').value = '';
});

document.querySelector('.button3').addEventListener('click', () => {

    let idParaExcluir = document.querySelector('.id').value;


    let objDados = leDados();


    let index = objDados.noticias.findIndex(noticia => noticia.id === idParaExcluir);


    if (index !== -1) {
        objDados.noticias.splice(index, 1);

        salvaDados(objDados);


        imprimeNoticias();
    } else {

        console.log("Item não encontrado para exclusão.");
    }
});

function imprimeNoticias() {
    let table = document.querySelector('.news-table');
    let objDados = leDados();
    let tableBody = table.querySelector('tbody') || table.createTBody(); // Se o tbody não existir, crie um
    let strHtml = '';


    tableBody.innerHTML = '';

    for (let i = 0; i < objDados.noticias.length; i++) {

        let newRow = tableBody.insertRow();


        let idCell = newRow.insertCell();
        let categoriaCell = newRow.insertCell();
        let tituloCell = newRow.insertCell();
        let siteCell = newRow.insertCell();
        let descricaoCell = newRow.insertCell();


        idCell.textContent = objDados.noticias[i].id;
        categoriaCell.textContent = objDados.noticias[i].categoria;
        tituloCell.textContent = objDados.noticias[i].titulo;
        siteCell.textContent = objDados.noticias[i].site;
        descricaoCell.textContent = objDados.noticias[i].descricao;
    }
}


