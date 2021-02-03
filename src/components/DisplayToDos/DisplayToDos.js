import React from 'react';
import Todo from './Todo';

function DisplayToDos() {
    return (
        <div style={styles.container}>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}
export default DisplayToDos
