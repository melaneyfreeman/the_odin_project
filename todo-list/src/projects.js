let projArray = [];

function Project  (projectName, tasks){
    this.projectName = projectName;
    this.tasks = [];

    //for each task in tasks array, create a div or w/e for each task
}

function addBtnListeners(){
    let addNewProjectLink = document.getElementsByClassName("addNewProjectLink")[0];
    addNewProjectLink.addEventListener("click", addProject);

    taskLinkListeners();
};


function addTaskBtnListener(i){
    let addNewTaskLink = document.getElementsByClassName("addNewTaskLink")[0];
    //need to do onclick this way because we are passing a value through addTask, otherwise it will trigger automatically
    addNewTaskLink.onclick = function(){
        addTask(i);
    }



}


//adds project to proj array
function addProject(){
    var name = prompt("enter project name:", "example project");

    if(name != null){
        let proj = new Project(name);
        console.log(proj.projectName);

        projArray.push(proj);
        console.log(projArray);

        populateProjList();
        //populateTaskList();
        
    }



}

//adds projects to list in html
function populateProjList(){
    let projectList = document.getElementsByClassName("projectList")[0];
    //reset html each time it repopulates
    projectList.innerHTML = "";

    //create element for project list item
    for(let i = 0; i < projArray.length; i++){

        let listItem = document.createElement('h5');
        listItem.innerHTML = projArray[i].projectName;
        listItem.classList.add("projectItem")
        projectList.appendChild(listItem);
    }

    projLinkListeners();

    

}

function populateTaskList(i){
    let taskWrapper = document.getElementsByClassName("taskWrapper")[0];
    //reset html each time it repopulates
    taskWrapper.innerHTML = "";

    console.log("hereeeeee");

    //create element for project list item
    for(var task in projArray[i].tasks){
        let listItem = document.createElement('h5');
        listItem.innerHTML = projArray[i].tasks[task];
        listItem.classList.add("taskItem")
        taskWrapper.appendChild(listItem);
        console.log("adding classlist to task item");
        //need this for the tasks to become highlighted when clicked,
        //passing the tasks as a variable
        taskLinkListeners(task);
    }

}

function projLinkListeners(){
    let projLinks = document.getElementsByClassName("projectItem");
    for(let i = 0; i < projLinks.length; i++){
        projLinks[i].onclick = function(){
            removeBackgroundColor();
            console.log("clicked project" + i);
            projLinks[i].style.backgroundColor = "white";
            projLinks[i].style.opacity = ".6";
            projLinks[i].style.color = "black";
            addTaskBtnListener(i);
            changeHeaderTitle(i);
            //important, when a different project is clicked, populate the corresponding tasks
            populateTaskList(i);

        }

    }

    console.log("link listeners");
}


function taskLinkListeners(){
    let taskLinks = document.getElementsByClassName("taskItem");
    console.log('got here');

    for(let i = 0; i < taskLinks.length; i++){
        taskLinks[i].onclick = function(){
            console.log('task clicked');
            taskLinks[i].style.backgroundColor = "white";
            console.log(taskLinks[i] + "clicked");
        }
    }
}

function changeHeaderTitle(i){
    let boxHeaderTitle = document.getElementById("boxHeaderTitle");
    boxHeaderTitle.textContent = "";
    boxHeaderTitle.textContent = projArray[i].projectName;
}

function removeBackgroundColor(){
    let projLinks = document.getElementsByClassName("projectItem");
    for(let i = 0; i < projLinks.length; i++){
        projLinks[i].style.backgroundColor = "transparent";

    }
}

//adds task to the specific project array
function addTask(i){
    console.log("task btn clicked");
    var task = prompt("enter task:", "work on ...");
    if(task != null){   
        projArray[i].tasks.push(task);

        console.log(projArray);

        populateTaskList(i);
        
    }
}



export {addBtnListeners};
