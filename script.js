
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  const text = document.createElement("span");
  const remove = document.createElement("button");

  text.textContent = value;
  remove.textContent = "Remove";

  text.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  remove.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(text);
  li.appendChild(remove);
  list.appendChild(li);

  input.value = "";
});
