import React from 'react';
import RemovedChecked from '../RemoveChecked';
import Todo from './Todo';


function DisplayToDos({database, setDatabase}) {
    
    return (
        <div style={styles.container}>
            {database.map((item, index) => <Todo todo={item} key={index} database={database} setDatabase={setDatabase} />)}
            <RemovedChecked />
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
