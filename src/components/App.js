import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import ClearTodos from '../containers/ClearTodos';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <ClearTodos />
    </div>
);

export default App;
