const bookContainer = document.querySelector(".book-container");
const url = "https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0a8d3c6872mshb0abc192221a9f0p1f5005jsn5354dbbfd0a4",
    "x-rapidapi-host": "book-finder1.p.rapidapi.com",
  },
};

let currentIndex = 0;
let books = [];

async function fetchBooks() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    books = result.results;
    console.log(books);
    displayBook();
  } catch (error) {
    console.error(error);
  }
}

function displayBook() {
  if (currentIndex < books.length) {
    const bookDetails = books[currentIndex];

    // Clear previous book details
    bookContainer.innerHTML = '';

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement("div");
    bookTitle.textContent = `Title: ${bookDetails.title}`;

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = `Author: ${bookDetails.work_id}`;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);

    bookContainer.appendChild(bookDiv);
  } else {
    currentIndex = 0;
    displayBook();
  }
}

function changeNext() {
  currentIndex++;
  if (currentIndex >= books.length) {
    currentIndex = 0;
  }
  displayBook();
}


document.querySelector(".btn").addEventListener("click", changeNext);
