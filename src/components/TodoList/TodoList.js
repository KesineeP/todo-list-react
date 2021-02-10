import React, { useState } from 'react';
import AddToDo from '../AddToDo';
import DisplayToDos from '../DisplayToDos';

function TodoList() {
    const [database, setDatabase] = useState([]);
    return (
        <div style={styles.container}>
            <AddToDo database={database} setDatabase={setDatabase}/>
            <DisplayToDos database={database} />
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
        fontSize: '',
        maxWidth: '450px'
    }
}

export default TodoList;

