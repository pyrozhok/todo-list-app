import React from "react";
import { ListRow } from "./components/Row";
import "./list.scss";
import { useAppSelector } from "../../app/hooks";
import { TodoActions } from "../../app/store";

export const TodoList = () => {
  const todos = useAppSelector(state => state.todo.todos);

  const handleDelete = (id: number) => {
    TodoActions.deleteTodo(id);
  };

  const toggleCheck = (id: number) => {
    TodoActions.toggleCheckTodo(id);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Список заданий</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map(todoItem => (
            <ListRow
              key={todoItem.id}
              text={todoItem.text}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={e => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">У Вас нет заданий на ближайшее время!</div>
      )}
    </div>
  );
};
