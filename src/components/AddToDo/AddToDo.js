import React, { useState } from 'react'

function AddToDo({database, setDatabase}) {
    const [newTodo, setNewTodo] = useState('');
    
    const savingNewTodo = (event) => {
        event.persist()
        setNewTodo(event.target.value)
    }
    
    const addTodoToDatabase = (event,newTodo) => {
        event.preventDefault()
        setDatabase([...database,{data: newTodo, isChecked: false}])
    }
    console.log('newTodo', newTodo);
    console.log('database', database);
    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <input 
                    style={styles.textInput} 
                    type='text' 
                    placeholder='What needs to be done?' 
                    onChange={(event) => savingNewTodo(event)}
                />
                <button 
                    style={styles.todoButton}  
                    value='+'
                    onClick={(event) => addTodoToDatabase(event,newTodo)}
                >
                <i className="fas fa-plus"></i>
                </button> 
            </form>
        </div>
    )
}
const styles = {
    container: {
        width: '100%',
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    textInput: {
        width: '240px',
        padding: '10px 0',
        border: 'solid 2px powderblue',
        // textAlign: 'left'
    },
    todoButton: {
        color: 'white',
        backgroundColor: '#4e93bd',
        border: 'none',
        fontSize: '13px',
        padding: '12px',
        marginLeft: '5px' 
    }
}
export default AddToDo;
