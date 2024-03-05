import todoStore from './src/store/todo.store';
import './style.css'
import { App } from './todos/app'

App('#app');

todoStore.initStore();

