import React, { useState } from "react";

import "./TodoForm.css";
import Tag from "./Tag";
const TodoForm = ({ setTodos, theme }) => {
  const [todoData, setTodoData] = useState({
    todo: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return todoData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (todoData.tags.some((item) => item === tag)) {
      const filterTags = todoData.tags.filter((item) => item !== tag);
      setTodoData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTodoData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);
    setTodos((prev) => {
      return [...prev, todoData];
    });
    setTodoData({
      todo: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            value={todoData.todo}
            className="todo_input"
            placeholder="Enter your task"
            onChange={handleChange}
          />
          <div className="todo_form_bottom_line">
            <div>
              <Tag
                tagName="Chores"
                selectTag={selectTag}
                selected={checkTag("Chores")}
                theme={theme}
              />
              <Tag
                tagName="Work"
                selectTag={selectTag}
                selected={checkTag("Work")}
                theme={theme}
              />
              <Tag
                tagName="Fun"
                selectTag={selectTag}
                selected={checkTag("Fun")}
                theme={theme}
              />
              <Tag
                tagName="Urgent"
                selectTag={selectTag}
                selected={checkTag("Urgent")}
                theme={theme}
              />
            </div>
            <div>
              <select
                name="status"
                value={todoData.status}
                className="todo_status"
                onChange={handleChange}
              >
                <option value="todo">TODO</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
              <button type="submit" className="todo_submit">
                + ADD TODO
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TodoForm;
