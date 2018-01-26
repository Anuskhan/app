import TodoListAction from '../action'

const INITIAL_STATE = {
  todo: {
    todoList: [

    ]
  },
  maxId: 0
}

function TodoListReducer(state = INITIAL_STATE, action) {
  var items = null;
  switch (action.type) {
    
    case TodoListAction.ADD_TODO:
        // object.assign ek source obj kis obj ma copy krna ha ... 2,3,4 target  
          var newState = Object.assign({}, state);
          // console.log(newState = Object.assign({}, state),"newstate")
          newState.maxId += 1;
          newState.todo.todoList.push({ ...action.payload, id: newState.maxId });
          console.log(  newState,"payload")
          return newState;
      
      default:
      return state
  }
}

export default TodoListReducer;