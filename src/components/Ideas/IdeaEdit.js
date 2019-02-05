import React, { Component } from 'react'

export class IdeaEdit extends Component {
    state = {
        text: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddIdea(this.state.text);
        this.setState({ text: ''})
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value })
    }
    
  render() {
    return (
      <div style={{marginBottom: '50px'}}>
        <form onSubmit={this.onSubmit}>
            <div className='field'>
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
                Click here to Add Idea
            </button>
        </div>
        </form>
      </div>

      
    )
  }
}

export default IdeaEdit