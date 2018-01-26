export default class TodoListAction {
    
       static ADD_TODO = "ADD_TODO";
        // static UPDATE_TODO = "UPDATE_TODO";
        // static DELETE_TODO = "DELETE_TODO";
       
    
        static addTodo(peratext){
            return { 
                type: TodoListAction.ADD_TODO,
                payload : {
                    text: peratext,
                    completed : false
                }
            }
        }
    }