const libraryBooks = [
    {
        title: "Control Your Mind and Master Your Feelings",
        author: "Eric Robertson",
        pages: 400,
        read: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvd-sVdEUl_60_asdpsCe5Co13n-R_88Q6qs-U6ST80qRNO7Q.jpg"
    },
    {
        title: "Court Mist Fury",
        author: "Sarah J. Maas",
        pages: 300,
        read: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50gYDXZWfXVEDUNZp8iYOAYonzIS9WCPu4RilQirKsBH4vg-c"
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins",
        pages: 450,
        read: true,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQE_0vapo4DBQFKF52omPfr9QzpbHLIMx7rMnGKLx7XLuKZWgdE"
    },
    {
        title: "Game Of Thrones",
        author: "George R. Martin",
        pages: 430,
        read: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIc-H9My9FtjycLDSrkfK_rv3vS-tGklB8XFQ4a1yc1WobpJeN"
    },
    {
        title: "Fifty Shades Of Gray",
        author: "E.L James",
        pages: 330,
        read: true,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzE_i9mKFayOA-Jm1E9ntPnYsKSMov7PGUofUe4GEbMI9dapZv"
    },
    {
        title: "I don't Love you Anymore",
        author: "Rithvik Singh",
        pages: 600,
        read: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmatfp4Ej6NxJfeQ2Zyrn8rTsMDmQtfDXiUyTsH-yexq1qHr0"
    }
];
const myLibrary = [];
const myFavorite = [];

function Book(title, authorFirstName, authorLastName, pages, read) {
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.pages = pages;
    this.read = read;
}
// function displayMyLibrary() {
//   const libraryDiv = document.querySelector('.myLibrary-section');

//   libraryBooks.forEach((book, index) => {
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card');
//     bookCard.innerHTML = `
//       <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQE_0vapo4DBQFKF52omPfr9QzpbHLIMx7rMnGKLx7XLuKZWgdE" alt="book" class="book">
//       <div>
//           <button>Read Status</button>
//           <button class="addButton data-index="${index}">Add to my Library</button>
//           <button class="remove-book" data-index="${index}">Remove from my Library</button>
//       </div>
      
//     `;
//     libraryDiv.appendChild(bookCard);
//   });
// }
document.getElementById('submit_button').addEventListener('click', () => {
  const title = document.getElementById('title');
  const pages = document.getElementById('pages');
  const authorFirstName = document.getElementById('authorFirstName');
  const authorLastName = document.getElementById('authorLastName');
  
  const newBook = [];
  newBook.push(
    {
      title: title,
      authorFirstName: authorFirstName,
      authorLastName: authorLastName,
      pages: pages
    }
  )
  myLibrary.push(newBook);
})



// function addToFavorite(book){
//     myFavorite.push(book);
// }



// function displayMyFavorite() {
//     const favoriteDiv = document.querySelector('.book_selection');
  
//     myFavorite.forEach((book, index) => {
//       const bookCard = document.createElement('div');
//       bookCard.classList.add('book-card');
//       bookCard.innerHTML = `
//         <img src="https://covers.openlibrary.org/b/id/9269962-M.jpg" alt="book cover" class="book">
//         <div>
//           <button class="read-status" data-index="${index}">Read Status</button>
//           <button class="remove-book" data-index="${index}">Add to my Favorite</button>
//         </div>
//       `;
//       favoriteDiv.appendChild(bookCard);
//     });
// }


// document.querySelector('second_button').addEventListener('click', () => {

// })


// document.getElementById('submit_button').addEventListener('click', (e) => {
//     e.preventDefault();
  
//     const title = document.getElementById('title').value;
//     const authorFirstName = document.getElementById('authorsfirstname').value;
//     const authorLastName = document.getElementById('authorslastname').value;
//     const pages = document.getElementById('pages').value;
//     const read = document.getElementById('read').checked;
  
//     const newBook = new Book(title, authorFirstName, authorLastName, pages, read);
//     addToLibrary(newBook);
  
//     document.getElementById('book-form').reset();
// });

// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove-book')) {
//       const index = e.target.dataset.index;
//       libraryBooks.splice(index, 1);
//       displayBooks();
//     }
  
//     if (e.target.classList.contains('read-status')) {
//       const index = e.target.dataset.index;
//       libraryBooks[index].read = !libraryBooks[index].read;
//       displayBooks();
//     }
// });
