import React from 'react'
import Button from '../Button/button.components'

const TodoItem = props => {
    const { id, description, handleDelete} = props
    return ( 
        <tr>
            <td>{description}</td>
            <td>Edit</td>
            <td><Button type='button' className='btn btn-sm btn-danger' onClick={() => handleDelete(id) }>Delete</Button></td>
        </tr>
     );
}

export default TodoItem;