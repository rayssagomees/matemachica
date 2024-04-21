const books = [
  {
    cover: "src/assets/book-cover/" + "stewart-calculo-v2-7ed-2013" + ".jpg",
    title: "Cálculo",
    link: "/respostas/calculo/stewart/volume/2/edicao/7/" + 'problema' + '.html',
  },
  {
    cover: "src/assets/book-cover/" + "guidorizzi-calculo-v3-5ed-2013" + ".jpg",
    title: "Um curso de cálculo",
    link: "/respostas/calculo/guidorizzi/volume/3/edicao/5/" + 'problema' + '.html',
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
  
      const title = document.createElement("h4");
      title.textContent = book.title;
  
      link.appendChild(img);
      bookDiv.appendChild(link);
      bookDiv.appendChild(title);
  
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