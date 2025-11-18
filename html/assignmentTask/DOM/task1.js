document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let text = document.getElementById("taskInput").value;

    if (text.trim() === "") {
        alert("Please enter a task");
        return;
    }

    createTask(text);
    saveTask(text);

    document.getElementById("taskInput").value = "";
}

function createTask(text) {
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = text;

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
        let newText = prompt("Edit task:", text);
        if (newText) {
            li.firstChild.textContent = newText;
            updateTask(text, newText);
            text = newText; // update local variable
        }
    });

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
        ul.removeChild(li);
        deleteTask(text);
    });

    li.appendChild(editBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);
}

// ------------------
// Local Storage
// ------------------

function saveTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (t) {
        createTask(t);
    });
}

function updateTask(oldText, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let index = tasks.indexOf(oldText);

    if (index !== -1) {
        tasks[index] = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function deleteTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updated = tasks.filter(function (t) {
        return t !== text;
    });

    localStorage.setItem("tasks", JSON.stringify(updated));
}
