const button = document.querySelector('.mainButton');
const input = document.querySelector('.inputContainer input');
const list = document.querySelector('.toDoList');

button.addEventListener('click' , () => {
    const li = document.createElement('li');

    li.className = 'toDoListItem';
    
    const deleteButton = document.createElement('button');
    li.innerText = input.value;
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteBtn';
    list.appendChild(li);
    li.appendChild(deleteButton);
});