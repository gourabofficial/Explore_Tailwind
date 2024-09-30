document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    const input_container = document.querySelector('.input-container');
    const todo_ul = document.querySelector('.todo-ul');

    let task = JSON.parse(localStorage.getItem("task")) || [];


    task.forEach(task => renderTask(task));

    btn.addEventListener('click', () => {
        const input = input_container.value.trim();
        if (input === "") return;

        const newTask = {
            id: Date.now(),
            name: input,
            completed: false
        }
        task.push(newTask);
        saveTask();
        input_container.value = "";
        console.log(task);
    })

    function renderTask() {
        console.log(task);
    }

    function saveTask() {
        localStorage.setItem("task", JSON.stringify(task));
    }
})