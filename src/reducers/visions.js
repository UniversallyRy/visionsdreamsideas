import uuid from 'uuid';
import {
    ADD_VISION,
    DELETE_VISION,
    DELETE_VISION_TODO,
    EDIT_VISION_TODO,
    SAVE_EDITED_VISION_TODO,
    CANCEL_EDIT_VISION_TODO,
} from "../constants/actionTypes";

const initialState = {
    items: [
        {
            title: 'Vision One',
            todos: [{todo:'THis is sample todos for a sample vision', id: uuid()}, {todo:'this is a second todo', id: uuid()}],
            id: uuid(),
            isOpen: false,
        },
        {
            title: 'Vision TWO',
            todos: [{todo:'THis is sample todos for a sample vision', id: uuid()}],
            id: uuid(),
            isOpen: false,
        },
        {
            title: 'Vision 3',
            todos: [{todo:'THis is sample todos for a sample vision', id: uuid()}],
            id: uuid(),
            isOpen: false,
        }
    ],
};

// const INIT_STATE = {
//     items: [],
// }

const visionReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_VISION:
            {
                const id = uuid();
                const todoId = uuid();
                const visionItem = {
                    title: action.title,
                    todos: [{todo: action.todos, id: todoId}],
                    id,
                    isOpen: false,
                };
                return {
                    ...state,
                    items: [...state.items, visionItem]
                }
            }

        case DELETE_VISION:
            {
                const items = state.items.filter(({
                    id
                }) => id !== action.id);
                return {
                    ...state,
                    items
                };
            }

        case DELETE_VISION_TODO:
            {
                const items = state.items.map( item  => {
                    item.todos.filter( (todo) => 
                        todo.id !== action.id
                    )
                    console.log(item)
                    return item
                });
                
                return {
                    ...state,
                    items
                }
            }

        case EDIT_VISION_TODO:
            {
                const item = state.items.find(({
                    id
                }) => id === action.id);
                return {
                    ...state,
                    editingVision: item
                };
            }

        case SAVE_EDITED_VISION_TODO:
            {
                const items = state.items.map(item => {
                    if (item.id === action.modifiedVision.id) {
                        item.title = action.modifiedVision.title;
                    }

                    return item;
                });

                return {
                    ...state,
                    items,
                    editingVision: {}
                };
            }

        case CANCEL_EDIT_VISION_TODO:
            {
                const newState = state.items.length ? {
                    ...state,
                    editingVision: {}
                } : {
                        ...state
                    };
                return newState;
            }

        default:
            {
                return state;
            }
    }
};

export default visionReducer;