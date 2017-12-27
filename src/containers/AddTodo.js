import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    // if the value is empty return
                    if (!input.value.trim()) {
                        return;
                    }
                    // adding the todo
                    dispatch(addTodo(input.value));
                    // reset the input value
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
