import React from 'react';
import { connect } from 'react-redux';
import { clearTodos } from '../actions';

let ClearTodos = ({ dispatch }) => {
    let input;

    return (
        <div>
            <button
                onClick={e => {
                    dispatch(clearTodos());
                }}
            >
                clear
            </button>
        </div>
    );
};
ClearTodos = connect()(ClearTodos);

export default ClearTodos;
