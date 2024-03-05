import todoStore,{ Filters }  from "../src/store/todo.store";
import html from "./app.html?raw"; //?raw para que importe en crudo y no intente renderizar
import { renderPending, renderTodos } from "./use-cases";


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        todoStore.loadStore();
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () =>{
        renderPending(ElementIDs.PendingCountLabel);
    }

    //Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html; //html importado
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);
    const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();

        event.target.value = '';

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {

        if (event.target.className === 'destroy') {
            let element = event.target.closest('[data-id]').getAttribute('data-id');
            todoStore.deleteTodo(element);
            displayTodos();
        }
    });

    clearCompletedButton.addEventListener('click', (event) => {
        console.log(event);
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch ((element.target.text)) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);

                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);

                    break;
                default: 
                    console.log('Rarete no?');
            };
            displayTodos();
        });
    });

}