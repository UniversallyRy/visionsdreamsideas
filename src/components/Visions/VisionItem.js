import React, { Component } from 'react'

export default class VisionItem extends Component {
  state = {
      displayButtons: false,
  }


  render() {
    return (
      <div
        style={{
          marginBottom: '10px',
          border: '1px black solid',
          borderRadius: '9px',
        }}
        id={this.props.item.id}
      >
        <h1>{this.props.item.title}</h1>
        <h2>{this.props.item.text}</h2>
      </div>
    )
  }
}
