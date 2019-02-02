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
                    className='input has-text-primary is-primary'
                    value={this.state.titleVal}
                    onChange={this.handleTitleChange}
                    placeholder='Add Title Here...' 
                    required
                    />
                </div>    
                <textarea
                    className='textarea has-text-primary has-background-dark is-primary'
                    rows='10'
                    placeholder='Add description here...'
                    onChange={this.handleTextChange}
                    value={this.state.text}
                    required
                />
            </div>
        <div>    
            <button disabled={true ? this.state.text === '' : false} className='button is-light is-large'>
                Click Here To Add Vision
            </button>
        </div>
        </form>
      </div>

      
    )
  }
}

export default VisionForm
