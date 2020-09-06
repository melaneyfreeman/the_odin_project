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

        //create element for project list item
        for(var task in projArray[i].tasks){
            let listItem = document.createElement('h5');
            listItem.innerHTML = projArray[i].tasks[task];
            listItem.classList.add("taskItem")
            taskWrapper.appendChild(listItem);
            console.log("adding classlist to task item");
            //need this for the tasks to become highlighted when clicked,
            //passing the tasks as a variable
            taskLinkListeners(i);
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
            //click again to highlight red to show it will be deleted
            projLinks[i].onclick = function(){
                projLinks[i].style.backgroundColor = "red";
                //click once more to delete
                projLinks[i].onclick = function(){
                    projArray.splice(i, 1);
                    console.log(projArray);
                    populateProjList();
                }
                
            }

        }

    }
}


function taskLinkListeners(i){
    //i = current selected project
    let taskLinks = document.getElementsByClassName("taskItem");
    for(let j = 0; j < taskLinks.length; j++){
        taskLinks[j].onclick = function(){
            taskLinks[j].style.backgroundColor = "white";
            taskLinks[j].style.color = "gray";
            taskLinks[i].style.opacity = ".6";
            console.log(taskLinks[j] + "clicked");
            //click again to delete task
            taskLinks[j].onclick = function(){
                taskLinks[j].style.backgroundColor = "red";

                taskLinks[j].onclick = function(){
                    projArray[i].tasks.splice(j, 1);
                    console.log(projArray);
                    //repopulate task list to remove deleted task
                    //i = current selected project
                    populateTaskList(i);
                }
              
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
    var task = prompt("enter task:", "work on ...");
    if(task != null){   
        projArray[i].tasks.push(task);

        //pass the current selected project
        populateTaskList(i);
        
    }
}



export {addBtnListeners};
