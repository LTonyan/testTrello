const taskTitle = document.getElementById("taskTitle");
const taskBody = document.getElementById("taskBody");
const  container = document.getElementById("current-tasks");
const inProgressContainer = document.getElementById("in-progress-tasks");
let newTaskContainer;
let taskCont;
let identicator = 0;
let taskObj = {};


const addNote = () =>{
    
    taskTitle.setAttribute("id", `title_${++identicator}`);
    taskBody.setAttribute("id", `body_${identicator}`);
    taskObj.title = taskTitle.value;
    taskObj.body = taskBody.value;
    taskObj.id = `note_${identicator}`;
    taskObj.status = "newTask";
    localStorage.setItem(`Item_${identicator}`,JSON.stringify(taskObj));
    creatingPost(identicator)
    clean();
}

const creatingPost = (id) =>{
    newTaskContainer = document.createElement("div");
    const taskObj_1= JSON.parse(localStorage.getItem(`Item_${identicator}`));
    taskCont = document.createElement("div");
    const headingCont = document.createElement("div");
    const taskHeading = document.createElement("label");
    const newTaskTitle = document.createElement("div");
    const taskDescription = document.createElement("div");
    const descriptionHeading = document.createElement("label");
    const descriptionBody = document.createElement("div");
    const statusTitle = document.createElement("label");
    const status = document.createElement("div");
    taskCont.setAttribute("id",`taskCont_${identicator}`);
    newTaskContainer.setAttribute("id",`newTaskContainer_${identicator}`);
    newTaskContainer.classList.add("newTaskContainer");
    headingCont.setAttribute("id",`heading_${identicator}`);
    headingCont.classList.add("post-content");
    taskDescription.classList.add("post-content");
    taskHeading.setAttribute("id", `taskTitle_${identicator}`);
    newTaskTitle.setAttribute("id", `newTaskTitle_${identicator}`);
    descriptionHeading.setAttribute("id", `descriptionTitle_${identicator}`);
    taskCont.classList.add("post-content");
    descriptionBody.setAttribute("id",`taskBody_${identicator}`);
    statusTitle.setAttribute("id",`statusTitle_${identicator}`);
    status.setAttribute("id", `status_${identicator}`);
    headingCont.appendChild(taskHeading);
    headingCont.appendChild(newTaskTitle);
    taskDescription.appendChild(descriptionHeading);
    taskDescription.appendChild(descriptionBody);
    taskCont.appendChild(headingCont);
    taskCont.appendChild(taskDescription)
    newTaskContainer.appendChild(taskCont);
    container.appendChild(newTaskContainer);
    document.getElementById(`taskTitle_${identicator}`).innerHTML = "Title:";
    document.getElementById(`newTaskTitle_${identicator}`).innerHTML = taskObj_1.title;
    document.getElementById(`descriptionTitle_${identicator}`).innerHTML = "Description:";
    document.getElementById(`taskBody_${identicator}`).innerHTML = taskObj_1.body;
    changeStatus();
    
}

const changeStatus = () =>{
    const statusForm = document.createElement("form");
    const statusContainer = document.createElement("div");
    const statusLabel = document.createElement("label");
    const statusDiv = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    statusDiv.setAttribute("id",`currentStatus_${identicator}`);
    statusForm.setAttribute("id",`statusForm_${identicator}`);
    option1.setAttribute("id", `option1_${identicator}`);
    option2.setAttribute("id", `option2_${identicator}`);
    option3.setAttribute("id", `option3_${identicator}`);
    option4.setAttribute("id", `option4_${identicator}`);
    statusForm.appendChild(statusContainer);
    statusForm.appendChild(statusLabel);
    statusDiv.appendChild(option1);
    statusDiv.appendChild(option2);
    statusDiv.appendChild(option3);
    statusDiv.appendChild(option4);
    statusForm.appendChild(statusDiv);
    taskCont.appendChild(statusForm);
    newTaskContainer.appendChild(taskCont);
    statusContainer.classList.add("form-group");
    statusDiv.classList.add("form-control");
    document.getElementById(`option1_${identicator}`).innerHTML = "New Task";
    document.getElementById(`option2_${identicator}`).innerHTML = "In progress";
    document.getElementById(`option3_${identicator}`).innerHTML = "On hold";
    document.getElementById(`option4_${identicator}`).innerHTML = "Done";
    statusDiv.onchange = () => changeCurrentPosition();
    
}

changeCurrentPosition = () =>{
    event.preventDefault();
    const currentStatus = document.getElementById(`currentStatus_${identicator}`);
       switch (currentStatus.value) {
           case "In progress":
               inProgress();
               break;
            case "On hold":
                   onHold();
                   break;
            default:
                   done();
        }
}

const inProgress = () =>{
   newTaskContainer.parentNode.removeChild(newTaskContainer) ;
   const inProgressContainer = document.getElementById("in-progress-tasks");
   inProgressContainer.appendChild(newTaskContainer);
}

const onHold = () =>{
    newTaskContainer.parentNode.removeChild(newTaskContainer);
    const onHoldContainer = document.getElementById("on-hold");
    onHoldContainer.appendChild(newTaskContainer);
}


const done = () =>{
    newTaskContainer.parentNode.removeChild(newTaskContainer);
    const doneContainer = document.getElementById("done");
    doneContainer.appendChild(newTaskContainer);
}


const clean = () =>{
    taskTitle.value = "";
    taskBody.value = "";
}

const logOut = () =>{
    document.location.href = "../index.html"
}
