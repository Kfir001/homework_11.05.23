//? מערך של ספרים
const books = [];

//? פונקציה להוספת ספר למערך
function addBook() {
  //? קבלת הערך של השדה
  const bookInput = document.querySelector("#book-input");
  const bookName = bookInput.value;

  //? בדיקה אם השדה לא ריק
  if (bookName) {
    //? הוספת הספר למערך
    books.push(bookName);

    //? איפוס השדה
    bookInput.value = "";
  }
}

//? פונקציה להצגת כל הספרים
function showBooks() {
  //? יצירת רשימת הספרים
  const bookList = books.map((book) => `<li>${book}</li>`).join("");

  //? הוספת הרשימה לדף
  document.querySelector("#book-list").innerHTML = bookList;
}

//? הוספת האלמנטים לדף
window.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Book List</h1>
        <input type="text" placeholder="Book name" id="book-input">
        <button onclick="addBook()">Add Book</button>
        <button onclick="showBooks()">Show Books</button>
    `;
  const book = document.createElement("ul");
  book.innerHTML = `
        <ul id="book-list"></ul>
    `;
  document.body.appendChild(container);
  document.body.appendChild(book);
});
