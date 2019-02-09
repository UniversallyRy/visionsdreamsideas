import React, { Component } from 'react'

export default class VisionTodos extends Component {
  render() {
    const { handleDeleteVisionTodo, todos} = this.props;
    return (
      <div>
        {todos.map(({todo, id}) => {  
            return <div
                    className='message-body has-background-primary'
                    id={id}
                    key={id} 
                    style={{margin:'10px'}}
                    > 
                      {todo}
                      <button 
                          className='delete'
                          onClick={() => handleDeleteVisionTodo(id)}
                      /> 
                    </div>
        })}
      </div>
    )
  }
}
