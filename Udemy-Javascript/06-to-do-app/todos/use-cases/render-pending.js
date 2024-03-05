import todoStore, { Filters } from "../../src/store/todo.store";

let element;

export const renderPending = (elementId) => {
    if (!element)
        element = document.querySelector(elementId);

    if (!element)
        throw new console.error(`Element ${elementId} not found`);

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;

}