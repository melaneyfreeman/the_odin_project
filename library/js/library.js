var myLibrary = [];
let libraryWrapper = document.getElementById("wrapper");
let newBookForm = document.getElementById("newBookFormContainer");

let newBookBtn = document.getElementById("addBookBtn");
let closeFormBtn = document.getElementById("closeFormBtn");

let deleteBookBtns = document.getElementsByClassName('deleteBookBtn');
let addBookBtn = document.getElementById("submitBtn");

///
let myLibraryBtns = document.getElementsByClassName('deleteBookBtn');

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
for (var i = 0; i < myLibraryBtns.length; i++){
    deleteBookBtns[i].addEventListener('click', function(e){
        e.currentTarget.parentNode.remove();
    }, true);
}


statusBtn.onclick = function(){
    
}

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(title, author, pages, status){
    let book = new Book(title, author, pages, status);
    

    let clone = document.querySelector('#book').cloneNode(true);
    clone.setAttribute('id', 'book');
    clone.style.display = "block";
    document.getElementById("wrapper").appendChild(clone);

    clone.querySelector('H2').textContent = title;
    clone.querySelector('H3').textContent = author;
    clone.querySelector('H4').textContent = pages;
    clone.querySelector('H5').textContent = status;


    for (var i = 0; i < myLibraryBtns.length; i++){
        deleteBookBtns[i].addEventListener('click', function(e){
            e.currentTarget.parentNode.remove();
        }, true);
    }

    //reset form values
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
}