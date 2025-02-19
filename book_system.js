let books = [];

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = parseInt(document.getElementById('pageNumber').value);

    if(bookName && authorName && bookDescription && !isNaN(pageNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pageNumber: pageNumber
        };

    
    books.push(book);
    showbooks();
    clearInputs();
    } else {
        alert('Complete todos los campos correctamente');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Número de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro: </strong>${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pageNumber} página(s)</p>
        <button onclick="deleteBook(${index})">Eliminar libro</button>
        `
        
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pageNumber').value = '';
}

function deleteBook(index){
    books.splice(index,1);
    showbooks();
}