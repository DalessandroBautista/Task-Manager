import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/tasks/";

class App extends Component {
state={
  data:[]
}

peticionGet=()=>{
  axios.get(url).then(response=>{
    console.log("datos")
    console.log(response.data)

  })
}

  componentDidMount() {
    this.peticionGet();
  }
  render(){
  return (
    <div className="App">
    <br />
    <button className="btn btn-success">Agregar Tarea</button>
    <br /><br />
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
    </div>
  );
}
}

export default App;
