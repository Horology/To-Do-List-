import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGlobalContext } from '../contexts/appcontext';
import styled from 'styled-components';



const Listcomponent = ({value: {id, item}}) => {

    const {todoList, setTodoList} = useGlobalContext();

    const handleOnClick = () => {
        console.log(todoList);
        console.log(todoList[id-1].item);
        setTodoList(todoList.filter((ele, index) => index+1 !== id));
        console.log(todoList);
    }

    return (
        <div>
            <Wrapper> 
                <p>{item}</p> 
                <ButtonWrapper onClick = {handleOnClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </ButtonWrapper>
            </Wrapper>
        </div>
    )
}

export default Listcomponent

const Wrapper = styled.div`
    box-sizing: border-box;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 2vw;
    color: lightblack;
    padding: 15px 10px;
    border-radius: 7px;
    display: block;
    align-text: center;
    height: auto;
    width: 30vw;
    margin: 3px;
    background: lightblue;
    :hover{
        border: 3px solid black;
        color: darkgray;
    }
    background: url("https://blog.hubspot.com/hubfs/To_Do_List.png"); 
    background-position: center; 
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
`;

const ButtonWrapper = styled.button`
    border-radius: 5px;
    float: right;
    background: maroon;
    color: white;

    :active{
        color: grey;
    }
`;
