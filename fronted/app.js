const apiUrl = "http://localhost:8888/api/tasks";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksList = document.getElementById("tasksList");

// Load tasks from backend
async function loadTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();

    tasksList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
            <div>
                <button onclick="toggleTask(${task.id}, ${!task.completed})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        tasksList.appendChild(li);

        // Animate task appearing
        setTimeout(() => li.classList.add('show'), 10);
    });
}

// Add new task
addTaskBtn.addEventListener("click", async () => {
    const title = taskInput.value.trim();
    if (title === "") return;

    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });

    taskInput.value = "";
    loadTasks();
});

// Toggle completion
async function toggleTask(id, completed) {
    await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed })
    });
    loadTasks();
}

// Delete task
async function deleteTask(id) {
    // Animate deletion
    const li = Array.from(tasksList.children).find(li => li.innerHTML.includes(`toggleTask(${id},`));
    if (li) {
        li.style.opacity = 0;
        li.style.transform = 'translateX(20px)';
        setTimeout(async () => {
            await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
            loadTasks();
        }, 300);
    }
}

// Initial load
loadTasks();