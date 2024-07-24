document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const errorMessage = document.getElementById('error-message');

    // Load todos from localStorage
    loadTodos();

    addBtn.addEventListener('click', function() {
        const inputValue = todoInput.value.trim();

        if (inputValue === '') {
            errorMessage.textContent = 'Xahiş edirik bir tapşırıq daxil edin!';
            return;
        }

        errorMessage.textContent = '';

        const li = document.createElement('li');
        li.textContent = inputValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            deleteTodoFromLocalStorage(inputValue);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        saveTodoToLocalStorage(inputValue);
        todoInput.value = '';
    });

    function saveTodoToLocalStorage(todo) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function deleteTodoFromLocalStorage(todo) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(item => item !== todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Sil';
            deleteBtn.addEventListener('click', function() {
                li.remove();
                deleteTodoFromLocalStorage(todo);
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
});
