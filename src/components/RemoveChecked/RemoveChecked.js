import React from 'react';

function RemovedChecked() {
    return (
        <div style={styles.container}>
            <button style={styles.button}>
                <p style={styles.p}>Remove Checked</p>
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '20px',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: '#4e93bd',
        border: 'none'
    },
    p: {
        margin: '0',
        paddingRight: '10px'
    }
}
export default RemovedChecked