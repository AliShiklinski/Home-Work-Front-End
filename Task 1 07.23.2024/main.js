document.getElementById('add-btn').addEventListener('click', function() {
    var input = document.getElementById('todo-input');
    var inputValue = input.value.trim();

    if (inputValue === '') {
        alert('Xahiş edirik bir tapşırıq daxil edin!');
        return;
    }

    var li = document.createElement('li');
    li.textContent = inputValue;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    input.value = '';
});
