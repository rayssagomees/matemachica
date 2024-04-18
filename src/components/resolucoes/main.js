var resolucoesMain = document.createElement('main');

// livros resolvidos
var livrosResolvidosTitle = [
    'GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. Volume 3. 5. edição',
]

var livrosResolvidosImages = [
    'guidorizzi-calculo-v3-5ed-2013.jpg', // GUIDORIZZI. Um curso de cálculo. Volume 3. 5. ed.
]

for (let index = 0; index < livrosResolvidosTitle.length; index++) {
    const descriptionImageBook = `Capa ${livrosResolvidosTitle[index]}`;

    // capa do livro
    var divCoverBook = document.createElement('div');
    var linkToBook = document.createElement('a');
    linkToBook.href = 'resolucoes/' + 'guidorizzi-volume-3' + '.html';

    var coverBook = document.createElement('img');
    coverBook.src = 'src/assets/book-cover/' + livrosResolvidosImages[index];
    coverBook.alt = `${descriptionImageBook}`;

    linkToBook.appendChild(coverBook);
    divCoverBook.appendChild(linkToBook);
    resolucoesMain.appendChild(divCoverBook);
}

document.body.appendChild(resolucoesMain);