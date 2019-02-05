import React, { Component } from 'react';


export default class DreamItem extends Component {
  state = {
      displayButtons: false,
  }


  render() {
    return (

      <section 
        className="message is-primary"
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
            onClick={() => this.props.handleDeleteDream(this.props.item.id)}
            aria-label="delete"
          >
          </button>
        </div>
        <div className="message-body">
          {this.props.item.text}
        </div>
      </section>

    )
  }
}
