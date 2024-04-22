const bookCover = 'src/media/book-cover/';

const books = [
  {
    cover: bookCover + "stewart-calculo-v2-7ed-2013.jpg",
    author: "James Stewart",
    title: "Cálculo",
    volume: "2",
    edition: "7",
    placePublication: "São Paulo",
    editor: "Cengage Learning",
    yearPublication: "2013",
    link: '/livros/stewart-cálculo-vol-2-7-ed/index.html',
  },
  {
    cover: bookCover + "guidorizzi-calculo-v3-5ed-2013.jpg",
    author: "Hamilton Luiz Guidorizzi",
    title: "Um curso de cálculo",
    volume: "3",
    edition: "5",
    placePublication: "São Paulo",
    editor: "LTC",
    yearPublication: "2013",
    link: '/livros/guidorizzi-um-curso-de-cálculo-vol-3-5-ed/index.html',
  },
  ];
  
  const container = document.getElementById("bookContainer");
  const numberBooks = 5;
  const totalNumberBooks = numberBooks * 2;

  function renderBooks() {
    for (let i = 0; i < totalNumberBooks && i < books.length; i++) {
      const book = books[i];
  
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
  
      const link = document.createElement("a");
      link.href = book.link;
  
      const img = document.createElement("img");
      img.src = book.cover;
      img.alt = 'Capa do livro ' + book.title;
  
      link.appendChild(img);
      bookDiv.appendChild(link);
  
      container.appendChild(bookDiv);
    }
  
    if (books.length > totalNumberBooks) {
      const showMoreButton = document.createElement("button");
      showMoreButton.textContent = "Ver mais";
  
      showMoreButton.addEventListener("click", function() {
        // Implemente a lógica para mostrar os livros restantes
        alert("A página que você quer ir está sendo desenvolvida. Por favor, volte novamente mais tarde.");
      });
  
      container.appendChild(showMoreButton);
    }
  }
  
  renderBooks();    