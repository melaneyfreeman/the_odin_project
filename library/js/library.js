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
            //since only one can be checked, don't check the rest
            break;
        }
    }
    
    addBookToLibrary(title, author, pages, status);
    newBookForm.style.display = "none";

    return false;

}
//functionality to delete books by clicking on the "x" button
function deleteBook(){
    const del = Array.from(document.getElementsByClassName("deleteBookBtn"));
    del.forEach(function(button, index){
        button.addEventListener("click", function(e){
            myLibrary.splice(index, 1);
            e.currentTarget.parentNode.remove();
        });
    });
}
 //functionality to toggle status
function toggleStatus(book){
    const change = Array.from(document.getElementsByClassName("changeStatusBtn"));
    change.forEach(function(button, index){
        button.addEventListener("click", function(e){
            change.id = index;
            if(e.currentTarget.innerHTML === "unread"){
                e.currentTarget.style.backgroundColor = "yellow";
                e.currentTarget.innerHTML = "read";
                book.status = "read";
                //e.currentTarget.parentNode.querySelector('H5').textContent = "read"; 
                //myLibrary[index].status = "read";      
            }
            else{
                e.currentTarget.style.color = "red";
                e.currentTarget.innerHTML = "unread";
                book.status = "unread";

               // e.currentTarget.parentNode.querySelector('H5').textContent = "unread";
               //myLibrary[index].status = "unread";        
            }
         });
    });
} 

//book object
function Book(title, author, pages, status){
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

    let clone = document.querySelector('#book').cloneNode(true);
    clone.setAttribute('id', 'book');
    clone.style.display = "block";
    document.getElementById("wrapper").appendChild(clone);

    clone.querySelector('H2').textContent = title;
    clone.querySelector('H3').textContent = author;
    clone.querySelector('H4').textContent = pages;
    clone.querySelector('.changeStatusBtn').textContent = status;

    //reset form values
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = ""; 

    //event listeners
    deleteBook();
    toggleStatus(this.book);
}


