import React from 'react'

function Todo() {
    return (
        <div style={styles.container}>
            <input type='checkbox'/>
            <p>Buy New Phone</p>
            <button>x</button>
        </div>
    )
}
const styles ={
    container: {
        display: 'flex',
        alignItems: 'center'
    }
}
export default Todo;
