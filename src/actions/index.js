import {
    ADD_VISION,
    DELETE_VISION,
    EDIT_VISION,
    SAVE_EDITED_VISION,
    CANCEL_EDIT_VISION,
} from './actionTypes';


export const addVision = (title, text) => ({
    type: ADD_VISION,
    title,
    text
});

export const deleteVision = id => ({
    type: DELETE_VISION,
    id
})

export const editVision = id => ({
    type: EDIT_VISION,
    id
})

export const saveEdit = modifiedVision => ({
    type: SAVE_EDITED_VISION,
    modifiedVision
})

export const cancelEdit = () => ({
    type: CANCEL_EDIT_VISION,
    payload: {},
});