import { Todo } from "../models/todo.model";


/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error ('A TODO object is required');

    //const {done, description, id} = todo //esto evita tener que escribir "todo." para acceder a las propiedades: todo.id -> id, todo.done -> done...

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
            <label>${todo.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
`;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);
    if ( todo.done )
        liElement.classList.add('completed')

    return liElement;
}