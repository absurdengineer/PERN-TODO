import React from 'react'
import Button from '../Button/button.components'
import InputBox from '../InputBox/input-box.components'

class NewTodo extends React.Component {
    state = { description : "" }
    handleChange = event => {
        const {name, value } = event.target
        this.setState({[name] : value})
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {description} = this.state
        try {
            const response = await fetch('http://127.0.0.1:8080/api/todos/',{
                method : "post",
                headers : { "Content-Type" : "application/json" },
                body : JSON.stringify({description})
            })
            console.log(response)
        } catch ({name, message}) {
            console.error(`${name} : ${message}`)
        }
        this.setState({description : ""})
    }
    render() { 
        const {description} = this.state
        return ( 
            <form className="d-flex" onSubmit={this.handleSubmit}>
                <InputBox type="text" name='description' className="form-control" value={description} onChange={this.handleChange} placeholder='Add New Task'/>
                <Button className='btn btn-outline-success mx-1' disabled={!description && true}>Submit</Button>
            </form>
         );
    }
}

export default NewTodo;
 