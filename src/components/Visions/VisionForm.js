import React, { Component } from 'react'

export class VisionForm extends Component {
    state = {
        titleVal: '',
        text: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddVision(this.state.titleVal, this.state.text);
        this.setState({ titleVal: '', text: ''})
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
            <div className='field'>
                <div className='control'>
                    <input
                    type='text'
                    className='input is-info'
                    value={this.state.titleVal}
                    onChange={this.handleTitleChange}
                    placeholder='Add Visions Title Here...' 
                    required
                    />
                </div>    
                <textarea
                    className='textarea'
                    rows='10'
                    placeholder='Add description here...'
                    onChange={this.handleTextChange}
                    value={this.state.text}
                />
            </div>
        <div>    
            <button className='button is-dark is-large'>
                Click here to Add Vision
            </button>
        </div>
        </form>
      </div>

      
    )
  }
}

export default VisionForm
