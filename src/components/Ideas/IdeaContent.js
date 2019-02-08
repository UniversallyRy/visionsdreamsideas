import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import IdeaForm from './IdeaForm';


class IdeaContent extends Component {
    
      
  render( ) {
    return (
        <div
            className='container has-text-centered' 
            style={{marginTop: '50px'}} 
            justify="center" 
            align="center"
        >
            <h1 className='title'>Got some ideas you wanna remember?</h1>
            <IdeaForm
                style={{marginBottom: '20px'}} 
                handleAddIdea={this.props.handleAddIdea}
            />

            <div className=''>
            {this.props.items.map((item) => (

                <IdeaItem 
                    key={item.id}
                    item={item}
                    handleDeleteIdea={this.props.handleDeleteIdea}
                />
                ))
            }
            </div>   
        </div>
    )
  }
}


export default IdeaContent
