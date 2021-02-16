import React from 'react'

function Todo({ todo, database, setDatabase }) {
    const handleDeleteTodo = (id) => {
        //delete this todo that clicked
        //setDatabase will exclude this todo
        const newDatabase = database.filter(todo => (todo.id !== id));
        setDatabase(newDatabase);
        //{id: kfsfkls, data: make rice, isCheck: false} !== kfsfkls

    }

        // user click checkbox 
        // if checkbox is unchecked switch isChecked to false, textDecoration is none
        // if checkbox is checked switch isChecked to true and change textDecoration to 
        // line-throught
    const handleChangeCheckbox = () => { 
        // const copyDatabase = [...database];
        // for(let i = 0; i < copyDatabase.length; i++) {
        //     if(copyDatabase[i].id === todo.id) {
        //         copyDatabase[i].isChecked = !copyDatabase[i].isChecked;
        //     }
        // } 
        // console.log('copyDatabase', copyDatabase)
        // setDatabase(copyDatabase)
        const newDatabase = database.map(databaseTodo => { //databaseTodo is element in database[]
            if(databaseTodo.id === todo.id) {
                databaseTodo.isChecked = !databaseTodo.isChecked
            }
            return databaseTodo
        })
        setDatabase(newDatabase)
    }
    console.log('database', database)
   
    return (
        <div style={styles.container}>
            <div style={styles.list}>
                <input 
                type='checkbox' 
                checked= {todo.isChecked}
                onChange={() => handleChangeCheckbox()}/>
                <p style={{textDecoration: todo.isChecked === true ? 'line-through' : 'none'}}>{todo.data}</p>
            </div>
            <div>
                <button style={styles.button}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button style={styles.button} onClick={() => handleDeleteTodo(todo.id)}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>   
        </div>
    )
}
const styles ={
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
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
    },
    p: {
        textDecoration: 'line-through'
    }
}
export default Todo;
