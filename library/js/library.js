var myLibrary = [];
let libraryWrapper = document.getElementById("wrapper");
let newBookForm = document.getElementById("newBookFormContainer");

let newBookBtn = document.getElementById("addBookBtn");
let closeFormBtn = document.getElementById("closeFormBtn");

let deleteBookBtns = document.getElementsByClassName('deleteBookBtn');
let addBookBtn = document.getElementById("submitBtn");

let formTitle = document.getElementById("title");
let formAuthor = document.getElementById("author");
let formPages = document.getElementById("pages");

let statusText = document.getElementById("statusText");

//opening the menu to add a new book
newBookBtn.onclick = function(){
    newBookForm.style.display = "block";
}
//closing the menu to add a new book
closeFormBtn.onclick = function(){
    newBookForm.style.display = "none";
}

//start with some books
function init(){
    addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", "423", "read");
    addBookToLibrary("The Two Towers", "J.R.R. Tolkien", "352", "unread");
    addBookToLibrary("The Return of the King", "J.R.R. Tolkien", "416", "unread");
    addBookToLibrary("The Hunger Games", "Suzanne Collins", "374", "read");
    addBookToLibrary("Catching Fire", "Suzanne Collins", "391", "read");
    addBookToLibrary("Mockingjay", "Suzanne Collins", "390", "read");
}

init();

//+book btn functionality
addBookBtn.onclick = function(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status;
    //get value for checked radio button for book satus
    let radios = document.getElementsByName("bookStatus");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            status = radios[i].value;
            //since only one can be checked, don't check the rest
            break;
        }
    }
    
    addBookToLibrary(title, author, pages, status);
    newBookForm.style.display = "none";

    //have to use return false so the element 
    //doesn't disappear when its created
    return false;
}

//book object
function Book(title, author, pages, status, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//add book to array and fill out book elements
function addBookToLibrary(title, author, pages, status){
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
    console.log(myLibrary);

    //wrapper
    let wrapper = document.getElementById("wrapper");
    wrapper.className = "wrapper";

    //create book
    let bookElem = document.createElement("div");
    bookElem.id = "book";
    wrapper.appendChild(bookElem);

    //delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBookBtn";
    deleteBtn.className = "deleteBookBtn";
    deleteBtn.innerHTML = '&times';
    bookElem.appendChild(deleteBtn);

    //toggle btn
    let toggleBtn = document.createElement("h5");
    toggleBtn.id = "toggleBtn";
    toggleBtn.className = "changeStatusBtn";
    toggleBtn.innerHTML = book.status;
    bookElem.appendChild(toggleBtn);

    //event listeners
    //toggle funtionality
    toggleBtn.onclick = function(){
        if(toggleBtn.innerHTML === "read"){
            toggleBtn.innerText = "unread";
            book.status = "unread";
        }
        else if(toggleBtn.innerHTML === "unread"){
            toggleBtn.innerText = "read";
            book.status = "read";
        }
    }

    //if the user didnt select radio button
    //set to unread
    if(toggleBtn.innerHTML === "undefined"){
        toggleBtn.innerHTML = "unread";
    }

    //delete functionality
    deleteBtn.onclick = function(e){
        //remove actual element
        e.currentTarget.parentNode.remove();
        //find specific book
        e.currentTarget.dataset.index = myLibrary.indexOf(book);
        let index = e.target.dataset.index;
        //delete book of specific index
        deleteBook(index);
    }

    //create title h2
    let bookTitle = document.createElement("h2");
    bookTitle.innerHTML = book.title;
    bookElem.appendChild(bookTitle);

    //create author h3
    let bookAuthor = document.createElement("h3");
    bookAuthor.innerText = book.author;
    bookElem.appendChild(bookAuthor);

    //create page h4
    let bookPages = document.createElement("h4");
    bookPages.innerText = book.pages;
    bookElem.appendChild(bookPages);

    //reset form values
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = ""; 
}

//remove specific book from array
function deleteBook(index){
    myLibrary.splice(index, 1);
    console.log(myLibrary);
}



