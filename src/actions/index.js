import {
    ADD_VISION,
    DELETE_VISION,
    DELETE_VISION_TODO,
    EDIT_VISION_TODO,
    SAVE_EDITED_VISION_TODO,
    CANCEL_EDIT_VISION_TODO,
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
} from '../constants/actionTypes';

// Visions
export const addVision = (title, todos) => ({
    type: ADD_VISION,
    title,
    todos
});

export const deleteVision = id => ({
    type: DELETE_VISION,
    id
})

export const deleteVisionTodo = id => ({
    type: DELETE_VISION_TODO,
    id
})

export const editVisionTodo = id => ({
    type: EDIT_VISION_TODO,
    id
})

export const saveEdit = modifiedVision => ({
    type: SAVE_EDITED_VISION_TODO,
    modifiedVision
})

export const cancelEdit = () => ({
    type: CANCEL_EDIT_VISION_TODO,
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
export const addIdea = text => ({
    type: ADD_IDEA,
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