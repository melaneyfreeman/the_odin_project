
let projArray = [];

function Project  (projectName, tasks, description, dueDate){
    this.projectName = projectName;
    this.tasks = [];
    this.description = description;
    this.dueDate = dueDate;
}

function addBtnListeners(){
    let addNewProjectLink = document.getElementsByClassName("addNewProjectLink")[0];
    addNewProjectLink.addEventListener("click", addProject);

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
         //create wrapper for task, and buttons
         let projItemWrapper = document.createElement('div');
         projItemWrapper.classList.add("projItemWrapper");
         projectList.appendChild(projItemWrapper);
        //adding projects
        let listItem = document.createElement('h5');
        listItem.innerHTML = projArray[i].projectName;
        listItem.classList.add("projectItem")
        projItemWrapper.appendChild(listItem);
        //adding delete btns for each project
        let deleteProjBtn = document.createElement("button");
        deleteProjBtn.classList.add("deleteProjBtn");
        deleteProjBtn.innerHTML = "×";
        projItemWrapper.appendChild(deleteProjBtn);
    }

    projLinkListeners();
    deleteProjBtnListeners();

    

}

function populateTaskList(i){
    let taskWrapper = document.getElementsByClassName("taskWrapper")[0];
    //reset html each time it repopulates
    taskWrapper.innerHTML = "";

    //need to check if i and projarray[i] have values,
    //for after we delete a project, that object and the tasks 
    //inside projarray is no longer there and is now undefined
    if(i!= undefined && projArray[i] != undefined){
        //create element for project list item
        for(var task in projArray[i].tasks){
            //create wrapper for task, and buttons
            let taskItemWrapper = document.createElement('div');
            taskItemWrapper.classList.add("taskItemWrapper");
            taskWrapper.appendChild(taskItemWrapper);
            //adding tasks
            let listItem = document.createElement('h5');
            listItem.innerHTML = projArray[i].tasks[task];
            listItem.classList.add("taskItem")
            taskItemWrapper.appendChild(listItem);
            //adding delete btns for each task
            let deleteTaskBtn = document.createElement("button");
            deleteTaskBtn.classList.add("deleteTaskBtn");
            deleteTaskBtn.innerHTML = "×  <br>";
            taskItemWrapper.appendChild(deleteTaskBtn);
            
            //adding edit btns for each task
            let editBtn = document.createElement('button');
            editBtn.classList.add("editBtn");
            editBtn.innerHTML = "done";
            taskItemWrapper.appendChild(editBtn);
            editBtn.style.display = "none";
            
        
            
            //need this for the tasks to become highlighted when clicked,
            //passing the tasks as a variable
            taskLinkListeners(i);
            editBtnListeners(i);
            deleteTaskBtnListeners(i);
            deleteProjBtnListeners();


        }
    }

}

function editBtnListeners(i){
    let editBtns = document.getElementsByClassName("editBtn");
    for(let k = 0; k < editBtns.length; k++){
        editBtns[k].onclick = function(){
            console.log("clicked edit btn" + k);
            //this keeps the selected project highlighted
            let projLinks = document.getElementsByClassName("projectItem");
            projLinks[i].style.backgroundColor = "white";
            projLinks[i].style.opacity = ".6";
            projLinks[i].style.color = "black";

            let taskItem = document.getElementsByClassName("taskItem")[k];
            projArray[i].tasks[k] = taskItem.innerHTML;
            console.log(projArray)

        
            editBtns[k].style.display = "none";
            taskItem.contentEditable = "false";
            taskItem.style.backgroundColor = "transparent";
            taskItem.style.cursor = "pointer";

        }
    }
}



function deleteTaskBtnListeners(i){
    //i = current selected project
    let deleteTaskBtns = document.getElementsByClassName("deleteTaskBtn");
    for(let k = 0; k < deleteTaskBtns.length; k++){
        deleteTaskBtns[k].onclick = function(){
            console.log("clicked delete task btn" + i);
            //k = task to be deleted
            projArray[i].tasks.splice(k, 1);
            populateProjList();
            populateTaskList(i);
            let projLinks = document.getElementsByClassName("projectItem");
            projLinks[i].style.backgroundColor = "white";
            projLinks[i].style.opacity = ".6";
            projLinks[i].style.color = "black";
        }
    }
}

function deleteProjBtnListeners(){
    let deleteProjBtns = document.getElementsByClassName("deleteProjBtn");
    for(let i = 0; i <deleteProjBtns.length; i++){
        deleteProjBtns[i].onclick = function(){
            console.log("clicked delete proj btn" + i);
            projArray.splice(i, 1);
            populateProjList();
            populateTaskList(i);
            projLinkListeners();


        }
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
                //i = current selected project
                populateTaskList(i);
            
            }
        
    }
}


function taskLinkListeners(i){
    //i = current selected project
    let taskLinks = document.getElementsByClassName("taskItem");
    for(let j = 0; j < taskLinks.length; j++){
        taskLinks[j].onclick = function(){
            if(taskLinks[j] != undefined){
                taskLinks[j].style.backgroundColor = "tomato";
                taskLinks[j].style.color = "white";
                taskLinks[j].style.opacity = ".8";
                console.log(taskLinks[j] + "clicked" + taskLinks[j].style.backgroundColor);
                
                let editBtn = document.getElementsByClassName("editBtn")[j];
                editBtn.style.display = "block";
                taskLinks[j].contentEditable = "true";
                taskLinks[j].style.cursor = "text";
                //repopulate task list to remove deleted task
                //i = current selected project
                //populateTaskList(i);
                let projLinks = document.getElementsByClassName("projectItem");
                projLinks[i].style.backgroundColor = "white";

  
            }
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
    openForm();
    let submitBtn = document.getElementsByClassName("addNewTaskBtnForm")[0];
    submitBtn.onclick = function(){
        let task = document.getElementsByClassName("taskInput")[0].value;
        let des = document.getElementsByClassName("taskDetails")[0].value;
        console.log(task);
        //var task = prompt("enter task:", "work on ...");
        if(task != null){   
            projArray[i].tasks.push(task);
            projArray[i].description = des;
            console.log(projArray[i]);
            //pass the current selected project
            populateTaskList(i);
            //after making sure its valid, close form
            closeForm();
        }

    }
    
    
  
    
}


function openForm(){
    document.getElementsByClassName("backgroundForm")[0].style.display = "block";

}

function closeForm(){
    document.getElementsByClassName("backgroundForm")[0].style.display = "none";

}

export {addBtnListeners};
