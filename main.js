todo_list = {
    "todo": ["item1", "item2", "item3"],
    "date": ["item7", "item8", "item9"],
    "done": [false, true, false]
}

showTask();

function showTask() {
    tbody = document.getElementById("todo-list");
    tbody.innerHTML = "";
    for (let i = 0; i < todo_list.todo.length; i++) {
        console.log(todo_list.todo[i], todo_list.date[i], todo_list.done[i]);
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.textContent = todo_list.todo[i];
        td2.textContent = todo_list.date[i];
        td3.innerHTML = `<input type="checkbox" id="${i}_checked" onclick="toggleDone(${i})" ${todo_list.done[i] ? "checked" : ""}>`;
        td4.innerHTML = `<button id="${i}_delete" onclick="deleteTask(${i})">Delete</button>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }
    console.log(todo_list);
}


add = document.getElementById("add");
add.addEventListener("click", () => {
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;
    todo_list.todo.push(task);
    todo_list.date.push(date);
    todo_list.done.push(false);
    console.log(todo_list);
    showTask();
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
})


function deleteTask(index) {
    console.log(index);
    todo_list.todo.splice(index, 1);
    todo_list.date.splice(index, 1);
    todo_list.done.splice(index, 1);
    showTask();
}

function toggleDone(index) {
    todo_list.done[index] = !todo_list.done[index];
    console.log(todo_list);
}

