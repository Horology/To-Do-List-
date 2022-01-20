import React, {useEffect} from 'react'
import Listcomponent from './Listcomponent';
import Submit from './Submit';
import styled from 'styled-components';
import {useGlobalContext} from '../contexts/appcontext';
import ClearAll from './ClearAll';

const Listcontainer = () => {
    const {todoList} = useGlobalContext();
    
    useEffect(() => {

        localStorage.setItem('todolist', JSON.stringify(todoList));
    }, [todoList])
    
    if(!todoList){
        return(
            <Wrapper>
                <h2> Start keeping track of your daily tasks today!</h2>
                <Submit />      
            </Wrapper>
        )
    }
    
    return (
        <Wrapper>
            <TodoWrapper>
                {todoList.map((item) => {
                    return( <Listcomponent key = {item.id} value = {item}/>);
                })}
            </TodoWrapper>
            <Submit />
            <ClearAll />       
        </Wrapper>
    )
};

export default Listcontainer

const Wrapper = styled.div`
    padding-top: 5vh;
    background: gainsboro; 
    width: 100%;
    height: 80vh;
    overflow: hidden;
    padding: white;

`;

const TodoWrapper = styled.div`
    display:grid; 
    flex-direction: column;
    justify-content: center
`;
