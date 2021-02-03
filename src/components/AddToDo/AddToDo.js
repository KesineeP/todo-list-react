import React from 'react'

function AddToDo() {
    return (
        <div style={styles.container}>
            <h2>Add To do list</h2>
            <button>Add</button>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        
        alignItems: 'center'
    }
}
export default AddToDo;
