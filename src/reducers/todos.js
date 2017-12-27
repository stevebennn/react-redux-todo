let defaultState = [
    { id: 0, text: 'asdf', completed: false },
    { id: 1, text: 'asdf', completed: false },
    { id: 2, text: 'asdf', completed: false }
];
const todos = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(
                todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
            );
        case 'CLEAR_TODOS':
            return (state = []);
        default:
            return state;
    }
};

export default todos;
