const classNames = 
{
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let newTodo = (function ()
{   
    let counter = 0;
    return function ()
    {
        counter = counter + 1;
        return counter;
    }
}) ()
