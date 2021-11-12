import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//componentes:
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/Task/TaskList";
import TaskForm from "./components/Task/TaskForm";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route path="/updateTask/:id" component={TaskForm} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
