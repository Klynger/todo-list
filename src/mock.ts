import { TodoType } from './TodoList/Todo';

export const TODOS: TodoType[] = [
  {
    complete: false,
    title: 'Finalizar o modal-layout',
    dueDate: new Date('2019-12-13T12:22:10.909Z'),
    username: 'Rafael',
  },
  {
    complete: false,
    title: 'Fazer grooming sobre collapsible-layout',
    dueDate: new Date('2019-12-13T12:22:29.588Z'),
    username: 'Klynger',
  },
  {
    complete: true,
    title: 'Lançar CSS Handles do ProductImage',
    dueDate: new Date('2019-12-13T12:22:44.179Z'),
    username: 'Rafael',
  },
  {
    complete: false,
    title: 'Adicionar handles na app store-components',
    dueDate: new Date('2019-12-13T12:23:43.924Z'),
    username: 'Klynger',
  },
];
