// Selecting popup box, popup overlay, and button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-popup");

cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting container, add-book, book-title, book-author, and description inputs
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Populate the container with the book details
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-button">Delete</button>
    `;

    // Append the new book container to the main container
    container.append(div);

    // Clear the input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Add event listener for the delete button
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        div.remove();
    });
});
