import React, { Component } from 'react';


export default class IdeaItem extends Component {
  state = {
      displayButtons: false,
  }


  render() {
    return (

      <div 
        className="notification is-success has-text-primary"
        id={this.props.item.id}
        style=
          {{marginBottom: '10px',
          border: '1px purple solid',
          borderRadius: '6px',}}
      >
        {this.props.item.text}
        <p style={{marginTop: '60px'}}>{this.props.item.time}</p>
          <button 
            className="delete is-medium"
            onClick={() => this.props.handleDeleteIdea(this.props.item.id)}
            aria-label="delete"
          >
          </button>
      </div>

    )
  }
}
