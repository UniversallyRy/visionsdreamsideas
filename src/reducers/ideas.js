import uuid from 'uuid';
import {
    ADD_IDEA,
    DELETE_IDEA,
    EDIT_IDEA,
    SAVE_EDITED_IDEA,
    CANCEL_EDIT_IDEA,
} from "../actions/actionTypes";

const initialState = {
    items: [{
        title: 'Idea One',
        text: 'THis is sample text for a sample idea',
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Idea TWO',
        text: 'THis is sample text for a sample idea',
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Idea 3',
        text: 'THis is sample text for a sample idea',
        id: uuid(),
        isOpen: false,
    }
    ],
};

// const INIT_STATE = {
//     items: [],
// }

const ideaReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_IDEA:
            {
                const id = uuid();
                const ideaItem = {
                    title: action.title,
                    text: action.text,
                    id,
                    isOpen: false,
                };
                return {
                    ...state,
                    items: [...state.items, ideaItem]
                }
            }

        case DELETE_IDEA:
            {
                const items = state.items.filter(({
                    id
                }) => id !== action.id);
                return {
                    ...state,
                    items
                };
            }

        case EDIT_IDEA:
            {
                const item = state.items.find(({
                    id
                }) => id === action.id);
                return {
                    ...state,
                    editingIdea: item
                };
            }

        case SAVE_EDITED_IDEA:
            {
                const items = state.items.map(item => {
                    if (item.id === action.modifiedIdea.id) {
                        item.title = action.modifiedIdea.title;
                    }

                    return item;
                });

                return {
                    ...state,
                    items,
                    editingIdea: {}
                };
            }

        case CANCEL_EDIT_IDEA:
            {
                const newState = state.items.length ? {
                    ...state,
                    editingIdea: {}
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

export default ideaReducer;