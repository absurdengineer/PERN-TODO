import React from 'react'
import TodoItem from '../TodoItem/todo-item.components';

const TodoList = ({todos}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(({id, description}) => <TodoItem key={id} id={id} description={description} />)}
            </tbody>
        </table>
        );

}
 
export default TodoList;