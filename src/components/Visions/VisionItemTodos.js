import React, { Component } from 'react'

export default class VisionItemTodos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(({todo, id}) => {  
            return <div
                    className='message-body has-background-primary'
                    id={id}
                    key={id} 
                    style={{margin:'10px'}}
                    > 
                        {todo}
                        <button 
                            className='delete'
                            onClick={() => this.props.handleDeleteVisionTodo(id)}
                        /> 
                    </div>
        })}
      </div>
    )
  }
}
