let myLibrary = [];
let libraryWrapper = document.getElementById("wrapper");
let newBookForm = document.getElementById("newBookFormContainer");

let newBookBtn = document.getElementById("addBookBtn");
let closeFormBtn = document.getElementById("closeFormBtn");

let deleteBookBtns = document.getElementsByClassName('deleteBookBtn');

myLibrary = document.getElementsByClassName('book');
console.log(myLibrary);

//opening the menu to add a new book
newBookBtn.onclick = function(){
    newBookForm.style.display = "block";
}
//closing the menu to add a new book
closeFormBtn.onclick = function(){
    newBookForm.style.display = "none";
}

//functionality to delete books by clicking on the "x" button
for (var i = 0; i < myLibrary.length; i++){
    deleteBookBtns[i].addEventListener('click', function(e){
        e.currentTarget.parentNode.remove();
    }, false);
}





function Book(){

}


function addBookToLibrary(){

}