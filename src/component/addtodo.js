import React, { Component } from "react";
// import fire from './firebase';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddTodo extends Component {
    
      constructor(){
        super();
        this.state = {
          todoDescription : ""
        }
        this.addTodo = this.addTodo.bind(this);
      }
    
      addTodo(){
        console.log(this.refs.todoText.value);
        this.props.addTodoEvent(this.refs.todoText.value);
      }
    
      render() {
        return (
          <div >
            Add Todo Item<br/>

            <input type="text" ref="todoText" placeholder="Todo Add"/>
            <button onClick={this.addTodo}>Add</button>
          </div>
        );
      }
    }
    

    export default AddTodo;
    