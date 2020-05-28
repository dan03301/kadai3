const add = document.getElementById("add");
const task = document.getElementById("task");
const taskId = document.getElementById("task-id");
const taskComment = document.getElementById("task-comment");
const taskStatus = document.getElementById("task-status");

const todos = [];

add.addEventListener("click", () => {
  const taskValue = task.value;
  todos.push(taskValue); // 追加

  if (!task.value == '') {
    showTodos();
  } else {
    alert('タスクを入力してください。')
  }
});

const showTodos = () => {
  while (taskId.firstChild) {
    taskId.removeChild(taskId.firstChild);
  }
  while (taskComment.firstChild) {
    taskComment.removeChild(taskComment.firstChild);
  }
  while (taskStatus.firstChild) {
    taskStatus.removeChild(taskStatus.firstChild);
  }

  todos.forEach((todo, index) => {
    const createId = document.createElement("p");
    const createComment = document.createElement("p");
    const createButtonGroup = document.createElement("div");
    const createStatusButton = document.createElement("button");
    const createRemoveButton = document.createElement("button");

    createId.textContent = `${index}`;
    createComment.textContent = `${todo}`;
    
    createStatusButton.textContent = '作業中';
    createStatusButton.setAttribute('class', 'statusButton');
    createRemoveButton.textContent = '削除';

    createButtonGroup.appendChild(createStatusButton);
    createButtonGroup.appendChild(createRemoveButton);
    createButtonGroup.setAttribute('class', 'ButtonGroup');

    taskId.appendChild(createId);
    taskComment.appendChild(createComment);
    taskStatus.appendChild(createButtonGroup);
  });

  task.value = '';
};
