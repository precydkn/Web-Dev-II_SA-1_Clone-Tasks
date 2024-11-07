var taskList = document.getElementById("task-list"); //get the container that holds all tasks

//add event delegation for checkbox clicks and task deletion
taskList.addEventListener("click", function(event) {
    //cross-off item if checkbox is clicked
    if (event.target.classList.contains("checkbox")) {
        event.target.classList.toggle("checked");
        event.target.parentElement.classList.toggle("checked");
    }

    //delete item if delete icon is clicked
    if (event.target.classList.contains("t") && event.target.tagName === "DIV") {
        event.target.parentElement.remove();
    }
});