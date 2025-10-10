const button = document.querySelector('.mainButton');
const input = document.querySelector('.inputContainer input');
const list = document.querySelector('.toDoList');

button.addEventListener('click' , () => {
    const li = document.createElement('li');
    li.className = 'toDoListItem';

    const text = input.value.trim();
    if (text === '') return 0;

    const deleteButton = document.createElement('button');
    li.innerText = input.value;

    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteBtn';
    list.appendChild(li);
    li.appendChild(deleteButton);
    input.value = '';
    
    deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    });
});
