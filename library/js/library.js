var myLibrary = [];
let libraryWrapper = document.getElementById("wrapper");
let newBookForm = document.getElementById("newBookFormContainer");

let newBookBtn = document.getElementById("addBookBtn");
let closeFormBtn = document.getElementById("closeFormBtn");

let deleteBookBtns = document.getElementsByClassName('deleteBookBtn');
let addBookBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");

let formTitle = document.getElementById("title");
let formAuthor = document.getElementById("author");
let formPages = document.getElementById("pages");
let formStatus = document.getElementsByName("bookStatus");

let statusText = document.getElementById("statusText");

//if there is no library or saved items
if(!localStorage.getItem('library')){
    setLocalStorage();
}

//opening the menu to add a new book
newBookBtn.onclick = function(){
    newBookForm.style.display = "block";
}
//closing the menu to add a new book
closeFormBtn.onclick = function(){
    newBookForm.style.display = "none";
}

//clear the storage button 
clearBtn.onclick = function(){
    localStorage.clear();
    myLibrary = [];
    render();
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
    
    if(title === "" || author === "" || pages === ""){
        alert("Please fill out all fields!");
    }
    else{
        addBookToLibrary(title, author, pages, status);
        newBookForm.style.display = "none";

        //have to use return false so the element 
        //doesn't disappear when its created
        return false;
    }
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
    setLocalStorage();
    render();

    //reset form values
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    //go through both radio buttons and uncheck them
    for(var j = 0; j < formStatus.length; j++){
        formStatus[j].checked = false;
    }
}

//remove specific book from array
function deleteBook(index){
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    setLocalStorage();
    render();
}

//refresh library
function render(){
    if(!localStorage.getItem('library')){
        setLocalStorage();
    }

    //wrapper
    let wrapper = document.getElementById("wrapper");
    wrapper.className = "wrapper";
    wrapper.innerHTML = "";

    getLocalStorage();
    
    for(let i = 0; i < myLibrary.length; i++){
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
        toggleBtn.innerHTML = myLibrary[i].status;
        bookElem.appendChild(toggleBtn);

        //create author h2
        let bookTitle = document.createElement("h2");
        bookTitle.innerHTML = myLibrary[i].title;
        bookElem.appendChild(bookTitle);

        //create author h3
        let bookAuthor = document.createElement("h3");
        bookAuthor.innerText = myLibrary[i].author;
        bookElem.appendChild(bookAuthor);

        //create page h4
        let bookPages = document.createElement("h4");
        bookPages.innerText = myLibrary[i].pages;
        bookElem.appendChild(bookPages);

        //event listeners
        //toggle funtionality
        toggleBtn.onclick = function(){
        if(toggleBtn.innerHTML === "read"){
            toggleBtn.innerText = "unread";
            myLibrary[i].status = "unread";
            setLocalStorage();
        }
        else if(toggleBtn.innerHTML === "unread"){
            toggleBtn.innerText = "read";
            myLibrary[i].status = "read";
            setLocalStorage();
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
            e.currentTarget.dataset.index = myLibrary[i];
            let index = e.target.dataset.index;

            //delete book of specific index
            deleteBook(i);
        }
    }
}

//::: LOCAL STORAGE STUFF ::://
function storageAvailable(type){
    var storage;
    try{
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    }

    catch(e){
        return e instanceof DOMException &&(
            //everything except firefox
            e.code === 22 ||
            //firefox
            e.code === 1014 ||
            //test name field too bc code might not be present
            //everything except firefox
            e.name === 'QuotaExceededError' ||
            //firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            //acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if(storageAvailable('localStorage')){
    console.log("local storage available");
}
else{
    console.log("no local storage available");
}

function setLocalStorage(){
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function getLocalStorage(){
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

render();
