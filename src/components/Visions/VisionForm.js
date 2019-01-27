import React, { Component } from 'react'

export class VisionForm extends Component {
    state = {
        titleVal: '',
        text: ' ',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddVision(this.state.titleVal, this.state.text);
        this.setState({ titleVal: ''})
    }

    handleTitleChange = (e) => {
        this.setState({ titleVal: e.target.value })
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value })
    }
    
  render() {
    return (
      <div style={{marginBottom: '50px'}}>
        <form onSubmit={this.onSubmit}>
            <div>
                <input
                value={this.state.titleVal}
                onChange={this.handleTitleChange} 
                required/>
            </div>
            <textarea
                onChange={this.handleTextChange}
                value={this.state.text}
            />
        <div>    
        <button>Click here to Add Vision</button>
        </div>
        </form>
      </div>
    )
  }
}

export default VisionForm
