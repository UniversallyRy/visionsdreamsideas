import uuid from 'uuid';
import {
    ADD_VISION,
    DELETE_VISION,
    EDIT_VISION,
    SAVE_EDITED_VISION,
    CANCEL_EDIT_VISION,
} from "../actions/actionTypes";

const initialState = {
    items: [{
        title: 'Vision One',
        text: 'THis is sample text for a sample vision',
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Vision TWO',
        text: 'THis is sample text for a sample vision',
        id: uuid(),
        isOpen: false,
    },
    {
        title: 'Vision 3',
        text: 'THis is sample text for a sample vision',
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
                const visionItem = {
                    title: action.title,
                    text: action.text,
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

        case EDIT_VISION:
            {
                const item = state.items.find(({
                    id
                }) => id === action.id);
                return {
                    ...state,
                    editingVision: item
                };
            }

        case SAVE_EDITED_VISION:
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

        case CANCEL_EDIT_VISION:
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