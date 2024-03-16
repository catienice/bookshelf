let books = [];

document.querySelector('.search').addEventListener('click', function () {
  let search = document.querySelector('#search-query').value;

  fetchBooks(search);

  document.querySelector('#search-query').value = '';
});

const fetchBooks = function (query) {
	const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
	fetch(url, {
		method: 'GET',
		dataType: 'json',
	})
		.then((data) => data.json())
		.then((data) => addBooks(data));
};


const addBooks = function (data) {
  for(i= 0; i > books.length; i++){
    
  };
};


const renderBooks = function (book) {
  document.querySelector('.books').replaceChildren();

  for (let i = 0; i < books.length; i++) {
    // create HTML and append to .books
    let book = books[i];
    const template = `
  <div class="book col-md-6">
    <h4>${ book.title }</h4>
    <div>Author: <strong>${ book.author }</strong></div>
    <div>Pages: <strong>${ book.pageCount }</strong></div>
    <div>ISBN: <strong>${ book.isbn }</strong></div>
    <img src="${book.imageURL}" alt="">
  </div>`;

    document.querySelector('.books').insertAdjacentHTML('beforeend', template);
  }
};

renderBooks();

