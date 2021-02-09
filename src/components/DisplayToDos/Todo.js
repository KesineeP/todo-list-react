import React from 'react'

function Todo() {
    return (
        <div style={styles.container}>
            <div style={styles.list}>
                <input type='checkbox'/>
                <p>Buy New Phone</p>
            </div>
            <div>
                <button style={styles.button}>
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button style={styles.button}>
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>   
        </div>
    )
}
const styles ={
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: 'solid lightgrey 1px'
        
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        
    },
    button: {
        border: 'none',
        color: 'lightgrey',
        borderRadius: '5px',
        fontSize: '20px',
        margin: '2px',
        padding: '5px'
    }
}
export default Todo;
