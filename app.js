const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');


// Add Item to To-Do List 

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    
    todoList.innerHTML += html;

};

addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value.trim();

    if(todo.length) {
        generateTemplate(todo);
    }

    addTodo.reset();

});


// Delete a To-Do

todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});



// Searching To-Do

const filterTodos = (searchKeyword) => {
    Array.from(todoList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(searchKeyword)).forEach(todo => todo.classList.add('filtered'));

    Array.from(todoList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(searchKeyword))
        .forEach(todo => todo.classList.remove('filtered'));

};

search.addEventListener('keyup', e => {
    const searchKeyword = e.target.value.trim().toLowerCase();
    
    // console.log(searchKeyword);
    // console.log(search.value);
    
    filterTodos(searchKeyword);

});

// search.addEventListener('submit', e => {
//     e.preventDefault();
// });

