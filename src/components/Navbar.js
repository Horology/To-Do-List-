import React, {useState} from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/appcontext';

const Navbar = () => {
    const {showAddButton, setShowAddButton} = useGlobalContext(); 

    const handleShowAddButton = () => {

        setShowAddButton(!showAddButton);

    }
    return (
        <>
            <Wrapper> 
                    <h1>
                    To-Do-List
                    </h1>    
                    <div>
                    
                    </div>   
                    <div>
                        <button
                        onClick = {handleShowAddButton}> Add </button>
                    </div>   

            </Wrapper>
                     <div>
                <h6 style = {{margin: "0"}}>created with React and Styled Components</h6>
            </div>
        </>
    )
}

export default Navbar;

const Wrapper = styled.section`

    box-sizing: border-box;
    padding: 4em; 
    
    background: url("https://blog.hubspot.com/hubfs/To_Do_List.png"); 
    background-position: center; 
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: inset 0 0 0 2000px rgba(50, 0, 200, 0.7);

    color: white;
    border-bottom: 2px;
    border-bottom: 3px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        background: black;
        opacity: .75;
        color: white; 
        border: 1px solid white;
        border-radius: 3px;
        height: 50px;
        width: 50px;
    }
    button: active { 
        color: gray; 
        border: black;
        height: 55px;
        width: 55px;
    } 
`;