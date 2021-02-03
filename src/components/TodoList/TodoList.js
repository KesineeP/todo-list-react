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
        backgroundColor: 'lightgray',
        flexDirection: 'center',
    }
}

export default TodoList;

