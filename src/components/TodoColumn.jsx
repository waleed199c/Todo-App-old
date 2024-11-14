import React from "react";
import "./TodoColumn.css";
import TodoCard from "./TodoCard";

const TodoColumn = ({
  columnName,
  columnIcon,
  todos,
  status,
  handleDelete,
}) => {
  return (
    <section className="todo_column">
      <h2 className="todo_column_heading">
        <img className="todo_column_icon" src={columnIcon} alt="" />
        {columnName}
      </h2>
      {todos.map(
        (todo, index) =>
          todo.status === status && (
            <TodoCard
              key={index}
              cardTitle={todo.todo}
              cardTags={todo.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TodoColumn;
