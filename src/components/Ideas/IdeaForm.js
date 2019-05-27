import React, { Component } from 'react'

export class IdeaForm extends Component {
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
                    className='textarea has-text-primary has-background-white is-primary'
                    rows='10'
                    placeholder='Jot down an idea here...'
                    onChange={this.handleTextChange}
                    value={this.state.text}
                    required
                />
            </div>
        <div>    
            <button disabled={true ? this.state.text === '' : false} className='has-text-primary button is-white is-large'>
                Click Here To Add Idea
            </button>
        </div>
        </form>
      </div>

      
    )
  }
}

export default IdeaForm
