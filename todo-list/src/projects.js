let projArray = [];

function Project  (projectName, tasks){
    this.projectName = projectName;
    this.tasks = [];

    //for each task in tasks array, create a div or w/e for each task
}

function addBtnListeners(){
    let addNewProjectLink = document.getElementsByClassName("addNewProjectLink")[0];
    addNewProjectLink.addEventListener("click", addProject);
    

};

//adds project to proj array
function addProject(){
    var name = prompt("enter project name:", "example project");

    if(name != null){
        let proj = new Project(name);
        console.log(proj.projectName);

        projArray.push(proj);
        console.log(projArray);

        populateProjList();
        
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

function projLinkListeners(){
    let projLinks = document.getElementsByClassName("projectItem");
    for(let i = 0; i < projLinks.length; i++){
        projLinks[i].onclick = function(){
            removeBackgroundColor();
            console.log("clicked project" + i);
            projLinks[i].style.backgroundColor = "white";
            projLinks[i].style.opacity = ".6";
            projLinks[i].style.color = "black";
            populateTaskList(i);
            addTaskBtnListener(i);
        }
    }
    
    
    console.log("link listeners");
}

function removeBackgroundColor(){
    let projLinks = document.getElementsByClassName("projectItem");
    for(let i = 0; i < projLinks.length; i++){
        projLinks[i].style.backgroundColor = "transparent";

    }
}


function addTaskBtnListener(i){
    let addNewTaskLink = document.getElementsByClassName("addNewTaskLink")[0];
    addNewTaskLink.addEventListener("click", addTask(i));
}

function populateTaskList(i){

}



function addTask(i){
    var task = prompt("enter task:", "work on ...");

    if(task != null){
        //logic for selected project

        let taskWrapper = document.getElementsByClassName("taskWrapper")[0];
        let taskItem = document.createElement('h5');
        taskItem.innerHTML = task;

        taskWrapper.appendChild(taskItem);

        projArray[i]['tasks'].push(task);

        console.log(projArray);
        
    }
}

function selectProject(){
    //if project selected, turn on task button
    //when add new task, add it to proj.tasks array inside that proj item
    //and update header title to proj name
    
}

export {addBtnListeners};
