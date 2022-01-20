import React, {useState, useContext, useEffect} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const initialFormData = () => {
        let list = localStorage.getItem('todolist');
        if(list) {
            return (list = JSON.parse(localStorage.getItem('todolist')))
        }else{
            return ''
        }

    };
    const [showAddButton, setShowAddButton] = useState(false);
    const [todoList, setTodoList] = useState(initialFormData);
    const [todo, setTodo] = useState('');
    
    const addTodo = (item) =>  {
        setTodoList([...todoList, {item:item, id:
        todoList.length+1
        }])
    };

    return(
        <AppContext.Provider value = {{showAddButton, setShowAddButton, todo, setTodo, addTodo, todoList, setTodoList}}>
            {children}
        </AppContext.Provider>
    );

};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}; 
