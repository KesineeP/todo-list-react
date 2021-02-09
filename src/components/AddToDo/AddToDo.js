import React from 'react'

function AddToDo() {
    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <input style={styles.todoInput}type='text' placeholder='What needs to be done?' />
                <button style={styles.todoButton} className='todoButton' type='submit'>
                <i class="fas fa-plus"></i>
                </button> 
            </form>
        </div>
    )
}
const styles = {
    container: {
        width: '450px',
    },
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    todoInput: {
        padding: '10px 120px',
        border: 'solid 2px powderblue',
        
    },
    todoButton: {
        color: 'white',
        backgroundColor: 'lightblue',
        border: 'none',
        fontSize: '31px'
    }
}
export default AddToDo;
