
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const remove = document.createElement("button");
  remove.textContent = "Remove";

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  remove.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(remove);
  list.appendChild(li);

  input.value = "";
});
