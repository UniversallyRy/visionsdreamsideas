import moment from 'moment';
import uuid from 'uuid';
import {
    ADD_DREAM,
    DELETE_DREAM,
    EDIT_DREAM,
    SAVE_EDITED_DREAM,
    CANCEL_EDIT_DREAM,
} from "../actions/actionTypes";

const initialState = {
    items: [{
        title: 'Dream One',
        todos: 'THis is sample todos for a sample dream',
        time: `${moment().subtract(3, 'days').format('On dddd ll')}`,
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Dream TWO',
        todos: 'THis is sample todos for a sample dream',
        time: `${moment().subtract(2, 'days').format('On dddd ll')}`,
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Dream 3',
        todos: 'THis is sample todos for a sample dream',
        time: `${moment().subtract(1, 'days').format('On dddd ll')}`,
        id: uuid(),
        isOpen: false,
    }
    ],
};

// const INIT_STATE = {
//     items: [],
// }

const dreamReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_DREAM:
            {
                const id = uuid();
                const dreamItem = {
                    title: action.title,
                    todos: action.todos,
                    time: moment().format('On dddd ll'),
                    id,
                    isOpen: false,
                };
                return {
                    ...state,
                    items: [...state.items, dreamItem]
                }
            }

        case DELETE_DREAM:
            {
                const items = state.items.filter(({
                    id
                }) => id !== action.id);
                return {
                    ...state,
                    items
                };
            }

        case EDIT_DREAM:
            {
                const item = state.items.find(({
                    id
                }) => id === action.id);
                return {
                    ...state,
                    editingDream: item
                };
            }

        case SAVE_EDITED_DREAM:
            {
                const items = state.items.map(item => {
                    if (item.id === action.modifiedDream.id) {
                        item.title = action.modifiedDream.title;
                    }

                    return item;
                });

                return {
                    ...state,
                    items,
                    editingDream: {}
                };
            }

        case CANCEL_EDIT_DREAM:
            {
                const newState = state.items.length ? {
                    ...state,
                    editingDream: {}
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

export default dreamReducer;