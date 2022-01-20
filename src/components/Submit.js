import React, {useState, useEffect} from 'react'
import {useGlobalContext} from '../contexts/appcontext';
import styled from 'styled-components';

const Submit = () => {
    const { showAddButton, todo, setTodo, addTodo} = useGlobalContext();
    const [disable, setDisable] = useState(false); 
    const placeholdertext = 'Enter a to-do item here';

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    const handleOnChange = (e) => {
        setTodo(e.target.value)
    }

    useEffect(() =>{
        if(todo == '' || todo.length < 4){
            return setDisable(true);
        }
        return setDisable(false);
    }, [todo])

    return (
        <Wrapper>
            {showAddButton && <Form onSubmit = {handleSubmit}>
                <label for = 'to-do'> To Do Item:</label>
                <input type = 'text' 
                name = 'to-do' 
                value = {todo} 
                placeholder = {placeholdertext}
                onChange ={handleOnChange} 
                />
                <input type = 'submit' disabled ={disable}/>   
            </Form>}
            {(todo.length < 4 && todo.length>0) && <h6 style = {{margin: 0, color: 'red'}}> 
            Please add more details to the description</h6>}
        </Wrapper>
    )
}

export default Submit

export const Wrapper = styled.div`
    border-radius: 10px;
    border: 1px solid white;
    margin: auto;
    margin-top: 10px;
    max-width: 50%;
    background: black; 
    color: lightgrey;
    max-height: 70px;
`;

const Form = styled.form`
    width: 100%;
    input{
        margin: 5px;
    }
    label{
        font-weight: bold;
    }
    input[type=submit]{ 
       background: black;
       color: white;
       border: 3px;
       margin-left: 5px;
       padding: 3px 7px;
    }
    input:disabled {
    background: grey;
       color: lightgrey;
    }

`;