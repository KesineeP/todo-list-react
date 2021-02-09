import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1}>TODOLIST</h1>
      <TodoList />
    </div>
  );
}

const styles = {
  h1: {
    fontSize: '25px',
  }
}

export default App;
