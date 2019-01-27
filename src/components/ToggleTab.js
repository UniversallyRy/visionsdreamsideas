import React from 'react'


// Filter component to swap todos visibility state.
const ToggleTab = () => (
    <div style={{ margin: '10px' }}>
        <span>Show: </span>
        <button active='true'>
            Visions
        </button>
        <button>
            Dreams
        </button>
        <button >
            Ideas
        </button>
    </div>
)

export default ToggleTab