import React, { Component } from 'react';
import VisionTodos from './VisionItemTodos';


export default class VisionItem extends Component {
  state = {
      displayButtons: false,
  }


  render() {
    return (

      <section 
        className="message is-dark"
        id={this.props.item.id}
        style=
          {{marginBottom: '10px',
          border: '1px black solid',
          borderRadius: '6px',}}
      >
        <div className="message-header">
          <p>{this.props.item.title}</p>
          <button 
            className="delete is-medium"
            onClick={() => this.props.handleDeleteVision(this.props.item.id)}
            aria-label="delete"
          />
        </div>
        <div className="message-body has-background-dark has-text-primary">
          <VisionTodos
          handleDeleteVisionTodo={this.props.handleDeleteVisionTodo}
          todos={this.props.item.todos}
          />
        </div>
      </section>

    )
  }
}
