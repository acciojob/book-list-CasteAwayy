const form = document.querySelector("form");
const btnSubmit = document.querySelector(".btn-submit");

const table = document.querySelector(".table");
const book_list = document.querySelector("#book-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new window.FormData(e.target);
  [title, author, isbn] = [...formData];

  addBook(title, author, isbn);
});

function addBook() {
  const html = `
    <tr>
              <td>${title[1]}</td>
              <td>${author[1]}</td>
              <td>${isbn[1]}</td>
              <td><button class="delete">&times;</button></td>
    </tr>`;
  book_list.insertAdjacentHTML("beforeend", html);

  const deleteRow = document.querySelectorAll(".delete");
  deleteRow.forEach((button) => {
    button.addEventListener("click", (e) => {
      //   e.preventDefault();
      console.log(e.target.parentElement.parentElement.remove());
    });
  });
}
