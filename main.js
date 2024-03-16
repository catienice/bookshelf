var books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    imageURL: 'https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isbn: '9781921479311',
    pageCount: 268
  }
];


var renderBooks = function (book) {
  document.querySelector('.books').replaceChildren();

  const template = `
  <div class="book col-md-6">
    <h4>${ book.title }</h4>
    <div>Author: <strong>${ book.author }</strong></div>
    <div>Pages: <strong>${ book.pageCount }</strong></div>
    <div>ISBN: <strong>${ book.isbn }</strong></div>
    <img src="${book.imageURL}" alt="">
  </div>`;

  for (var i = 0; i < books.length; i++) {
    // create HTML and append to .books
    document.querySelector('.books').insertAdjacentHTML('beforeend', template);
  }
};

renderBooks(books);