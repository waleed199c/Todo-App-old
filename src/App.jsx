import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoColumn from "./components/TodoColumn";
import { Toggle } from "./components/Toggle";
import Footer from "./components/Footer";

const oldTodos = localStorage.getItem("todos");
console.log(oldTodos);

const storedTheme = localStorage.getItem("theme");


const App = () => {
  const [todos, setTodos] = useState(JSON.parse(oldTodos) || []);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (storedTheme) {
      setIsDark(storedTheme === "dark"); // If found, apply it
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemPrefersDark); // Use system preference if no stored theme
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  

  const handleDelete = (todoIndex) => {
    const newTodos = todos.filter((todo, index) => index !== todoIndex)
    setTodos(newTodos)
  }
  return (
    <div className="app" data-theme = {isDark? "dark" : "light"}>
      <TodoForm setTodos={setTodos} theme={isDark} />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      <main className="app_main">
        <TodoColumn
          columnName="TODO"
          columnIcon="/src/assets/direct-hit.png"
          todos={todos}
          status='todo'
          handleDelete={handleDelete}
        />
        <TodoColumn
          columnName="Ongoing"
          columnIcon="/src/assets/glowing-star.png"
          todos={todos}
          status='ongoing'
          handleDelete={handleDelete}
        />
        <TodoColumn
          columnName="Completed"
          columnIcon="/src/assets/check-mark-button.png"
          todos={todos}
          status='completed'
          handleDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
