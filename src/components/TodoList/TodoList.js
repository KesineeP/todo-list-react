import React from 'react';
import AddToDo from '../AddToDo';
import DisplayToDos from '../DisplayToDos';

function TodoList() {
    return (
        <div style={styles.container}>
            <AddToDo />
            <DisplayToDos />
        </div>
    )
}

const styles = {
    container: { 
        display: 'flex', 
        flexDirection: 'column',
        padding: '20px',
        border: '2px solid lightblue',
        // backgroundImage: 'linear-gradient(to bottom, lightblue, lightyellow)'
        background: 'white',
        fontSize: ''
    }
}

export default TodoList;

