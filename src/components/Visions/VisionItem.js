import React, { Component } from 'react';
import VisionTodos from './VisionItemTodos';


export default class VisionItem extends Component {
  state = {
      displayButtons: false,
  }


  render() {
    const { item, handleDeleteVision, handleDeleteVisionTodo } = this.props;
    return (

      <section 
        className="message is-dark"
        id={item.id}
        style=
          {{marginBottom: '10px',
          border: '1px black solid',
          borderRadius: '6px',}}
      >
        <div className="message-header">
          <p>{item.title}</p>
          <button 
            className="delete is-medium"
            onClick={() => handleDeleteVision(item.id)}
            aria-label="delete"
          />
        </div>
        <div className="message-body has-background-dark has-text-primary">
          <VisionTodos
          handleDeleteVisionTodo={handleDeleteVisionTodo}
          todos={item.todos}
          />
        </div>
      </section>

    )
  }
}
