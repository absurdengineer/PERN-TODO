import React from 'react'
import ListTodo from '../TodoList/todo-list.components';

const TodoContainer = props => {
    const {todos} = props
    return ( 
        <div className="card mt-5 p-5">
            <ListTodo todos={todos}/>
        </div>
     );
}
 
export default TodoContainer;