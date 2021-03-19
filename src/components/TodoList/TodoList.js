import React, { useState } from 'react';
import AddToDo from '../AddToDo';
import DisplayToDos from '../DisplayToDos';
import RemoveCheckedTodos from '../RemoveCheckedTodos';

// click delete button
// that todo will be removed from todo list(database)

function TodoList() {
    const [database, setDatabase] = useState([]);
    return (
        <div style={styles.container}>
            <AddToDo database={database} setDatabase={setDatabase} />
            <DisplayToDos database={database} setDatabase={setDatabase} />
            <RemoveCheckedTodos database={database} setDatabase={setDatabase} />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        fontSize: '',
        maxWidth: '450px',

    }
}

export default TodoList;

