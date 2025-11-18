document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    var text = document.getElementById("taskInput").value;
    var priority = document.getElementById("priority").value;

    if (text.trim() === "") {
        alert("Please enter a task");
        return;
    }

    createTask(text, priority, false);
    saveTask(text, priority, false);

    document.getElementById("taskInput").value = "";
}

function createTask(text, priority, completed) {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    li.textContent = text + " ";
    li.className = priority;
    if (completed) {
        li.classList.add("completed");
    }

    // ---- Complete ----
    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        toggleComplete(text);
    });

    // ---- Edit ----
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
        var newText = prompt("Edit your task:", text);
        if (newText !== null && newText.trim() !== "") {
            li.firstChild.textContent = newText + " ";
            updateTask(text, newText);
            text = newText; // update reference
        }
    });

    // ---- Delete ----
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
        ul.removeChild(li);
        deleteTask(text);
    });

    li.appendChild(doneBtn);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);
}

function saveTask(text, priority, completed) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({
        text: text,
        priority: priority,
        completed: completed
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        createTask(task.text, task.priority, task.completed);
    });
}

function updateTask(oldText, newText) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        if (task.text === oldText) {
            task.text = newText;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(text) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    var filtered = tasks.filter(function (task) {
        return task.text !== text;
    });

    localStorage.setItem("tasks", JSON.stringify(filtered));
}

function toggleComplete(text) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        if (task.text === text) {
            task.completed = !task.completed;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
