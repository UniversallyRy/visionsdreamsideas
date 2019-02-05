import {
    ADD_VISION,
    DELETE_VISION,
    EDIT_VISION,
    SAVE_EDITED_VISION,
    CANCEL_EDIT_VISION,
    ADD_DREAM,
    DELETE_DREAM,
    EDIT_DREAM,
    SAVE_EDITED_DREAM,
    CANCEL_EDIT_DREAM,
    ADD_IDEA,
    DELETE_IDEA,
    EDIT_IDEA,
    SAVE_EDITED_IDEA,
    CANCEL_EDIT_IDEA,
} from './actionTypes';

// Visions
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

// Dreams
export const addDream = (title, text) => ({
    type: ADD_DREAM,
    title,
    text
});

export const deleteDream = id => ({
    type: DELETE_DREAM,
    id
})

export const editDream = id => ({
    type: EDIT_DREAM,
    id
})

export const saveDreamEdit = modifiedDream => ({
    type: SAVE_EDITED_DREAM,
    modifiedDream
})

export const cancelDreamEdit = () => ({
    type: CANCEL_EDIT_DREAM,
    payload: {},
});

// Ideas
export const addIdea = (title, text) => ({
    type: ADD_IDEA,
    title,
    text
});

export const deleteIdea = id => ({
    type: DELETE_IDEA,
    id
})

export const editIdea = id => ({
    type: EDIT_IDEA,
    id
})

export const saveIdeaEdit = modifiedIdea => ({
    type: SAVE_EDITED_IDEA,
    modifiedIdea
})

export const cancelIdeaEdit = () => ({
    type: CANCEL_EDIT_IDEA,
    payload: {},
});