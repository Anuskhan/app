import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListAction from '../store/action';


import AddTodo from "../component/addtodo"
function mapStateToProps(state) {
    return {
        todoState: state.TodoListReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todoText) => dispatch(TodoListAction.addTodo(todoText)),
     
    };
}

class Main extends Component {

  render() {
    
    return (
      <div >
        <div>
          <AddTodo addTodoEvent={this.props.addTodo} />
        </div>
        <hr/>
        <div>
          <span>Todo List</span>
          {/* <TodoList todoObj={this.props.todoState.todo} 
                   
                 /> */}
        </div>
       
      </div>
    );
  }
}

//export default Main;
export default connect(mapStateToProps,mapDispatchToProps)(Main);
