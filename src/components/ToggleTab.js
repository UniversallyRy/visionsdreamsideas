import React from 'react'


// Filter component to swap todos visibility state.
const ToggleTab = () => (
    <div className='tabs is-centered is-toggle' style={{ margin: '10px' }}>
        <span>Show: </span>
        <ul>
            <li className='is-active'>
                <a href='/#'>Visions</a>
            </li>
            <li>
                <a href='/#'>Dreams</a>
            </li>
            <li>
                <a href='/#'>Ideas</a>
            </li>
        </ul>   
    </div>
)

export default ToggleTab