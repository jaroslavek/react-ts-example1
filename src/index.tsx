import * as React from "react";
import { render } from "react-dom";
import { TodoList } from "./todolist/TodoList";
import "./styles.css";
import Main from "./bootstrap/Main";

function App() {
  // return <TodoList />;
  return <Main />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
