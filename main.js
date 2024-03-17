let books = [];
const loadingDiv = document.querySelector('.loading');

document.querySelector('.search').addEventListener('click', function () {
  let search = document.querySelector('#search-query').value;
  fetchBooks(search);

  document.querySelector('#search-query').value = '';
  
  loadingDiv.classList.add('show');
});

const fetchBooks = function (query) {
	const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
	fetch(url, {
		method: 'GET',
		dataType: 'json',
	})
		.then((data) => data.json())
		.then((data) => addBooks(data))
    .then(() => hideLoading());
};

const addBooks = function (data) {
  books = [];

  for (let i = 0; i < data.items.length; i++){
    let bookInfo = data.items[i];

    let book = {
      title: bookInfo.volumeInfo.title || null,
      author: bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors[0] : null,
      pageCount: bookInfo.volumeInfo.pageCount || null,
      isbn: bookInfo.volumeInfo.industryIdentifiers ? bookInfo.volumeInfo.industryIdentifiers[0].identifier : null,
      imageURL: bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.thumbnail : null,
    }
    books.push(book);
  }
 
  renderBooks();
  
}

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

const hideLoading = function(){
  loadingDiv.className = 'loading';
}
