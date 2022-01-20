import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/appcontext';
import { Wrapper } from './Submit';

const ClearAll = () => {
    const {todoList, setTodoList} = useGlobalContext(); 

    const clearAll = () => {
        setTodoList('');
    }
    return (
        
        <ButtonWrapper onClick = {clearAll}>Clear All </ButtonWrapper> 
        
    )
}

export default ClearAll

const ButtonWrapper = styled.button`
    border-radius: 10px;
    border: 1px solid white;
    margin: auto;
    margin-top: 10px;
    max-width: 50%;
    background: black; 
    color: white;
    padding: 3px 6px;

`


