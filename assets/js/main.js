document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add_task_button');
    const deleteTaskButton = document.getElementById('delete_task_button');
    const completeTaskButton = document.getElementById('complete_task_button');
    const taskList = document.querySelector('.task_list');
    const newTaskInput = document.getElementById('new_task_input');
    const inputBox = document.querySelector('.input_box');

    // Yeni task
    addTaskButton.addEventListener('click', () => {
        inputBox.classList.add('visible');
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.classList.add('task_element');
            listItem.innerHTML = `<input type="checkbox">${taskText} <button>✏</button>`;
            taskList.appendChild(listItem);
            newTaskInput.value = ''; // input alanını temizle
        }
    });

    //task sil
    deleteTaskButton.addEventListener('click', () => {
        const checkedTasks = taskList.querySelectorAll('.task_element input[type="checkbox"]:checked');
        checkedTasks.forEach(task => {
            task.parentElement.remove();
        });
    });

    // task tamamla
    completeTaskButton.addEventListener('click', () => {
        const checkedTasks = taskList.querySelectorAll('.task_element input[type="checkbox"]:checked');
        checkedTasks.forEach(task => {
            task.parentElement.style.textDecoration = 'line-through';
        });
    });

    // task güncəlləmə
    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const listItem = e.target.parentNode;
            const oldText = listItem.firstChild.nextSibling.textContent;
            listItem.innerHTML = `<input type="checkbox"><input type="text" class="edit_task_input task_input" value="${oldText}"> <button class="save_edit_button">💾</button>`;
            const editInput = listItem.querySelector('.edit_task_input');
            editInput.focus();
            const saveEditButton = listItem.querySelector('.save_edit_button');
            saveEditButton.addEventListener('click', () => {
                const newText = editInput.value.trim();
                if (newText) {
                    listItem.innerHTML = `<input type="checkbox">${newText} <button>✏</button>`;
                }
            });
        }
    });
});
