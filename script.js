
const taskField = document.getElementById("taskField");
const addTaskButton = document.getElementById("addTaskButton");
const tasksContainer = document.getElementById("tasksContainer");

addTaskButton.addEventListener("click", () => {
  const taskText = taskField.value.trim();

  if (taskText === "") return;

  const taskItem = document.createElement("li");
  const taskLabel = document.createElement("span");
  const removeButton = document.createElement("button");

  taskLabel.textContent = taskText;
  removeButton.textContent = "Remove";

  taskLabel.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  removeButton.addEventListener("click", () => {
    tasksContainer.removeChild(taskItem);
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(removeButton);
  tasksContainer.appendChild(taskItem);

  taskField.value = "";
});
