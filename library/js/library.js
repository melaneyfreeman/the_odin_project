var myLibrary = [];
let libraryWrapper = document.getElementById("wrapper");
let newBookForm = document.getElementById("newBookFormContainer");

let newBookBtn = document.getElementById("addBookBtn");
let closeFormBtn = document.getElementById("closeFormBtn");

let deleteBookBtns = document.getElementsByClassName('deleteBookBtn');
let addBookBtn = document.getElementById("submitBtn");

///

let formTitle = document.getElementById("title");
let formAuthor = document.getElementById("author");
let formPages = document.getElementById("pages");

let statusBtn = document.getElementsByClassName("statusBtn");

//opening the menu to add a new book
newBookBtn.onclick = function(){
    newBookForm.style.display = "block";
}
//closing the menu to add a new book
closeFormBtn.onclick = function(){
    newBookForm.style.display = "none";
}
init();

function init(){
    addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", "423", "read");
    addBookToLibrary("The Two Towers", "J.R.R. Tolkien", "352", "unread");
    addBookToLibrary("The Return of the King", "J.R.R. Tolkien", "416", "unread");
    addBookToLibrary("The Hunger Games", "Suzanne Collins", "374", "read");
    addBookToLibrary("Catching Fire", "Suzanne Collins", "391", "read");
    addBookToLibrary("Mockingjay", "Suzanne Collins", "390", "read");
}

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
            //since only one can be checked, dont check the rest
            break;
        }
    }
    
    addBookToLibrary(title, author, pages, status);
    newBookForm.style.display = "none";

    return false;

}

//functionality to delete books by clicking on the "x" button
for (var i = 0; i < deleteBookBtns.length; i++){
    deleteBookBtns[i].addEventListener('click', function(e){
        myLibrary.splice(i, 1);
        e.currentTarget.parentNode.remove();
        console.log(myLibrary);
    }, true);
}


statusBtn.onclick = function(e){
    
}

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(title, author, pages, status){
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
    console.log(myLibrary);

    let clone = document.querySelector('#book').cloneNode(true);
    clone.setAttribute('id', 'book');
    clone.style.display = "block";
    document.getElementById("wrapper").appendChild(clone);

    clone.querySelector('H2').textContent = title;
    clone.querySelector('H3').textContent = author;
    clone.querySelector('H4').textContent = pages;
    clone.querySelector('H5').textContent = status;


    for (var i = 0; i < deleteBookBtns.length; i++){
        deleteBookBtns[i].addEventListener('click', function(e){
            e.currentTarget.parentNode.remove();
            
        }, true);
    }

    //reset form values
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
}