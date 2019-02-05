import React, { Component } from 'react';
import DreamItem from './DreamItem';
import DreamForm from './DreamForm';


class DreamContent extends Component {
    
      
  render( ) {
    return (
        <div
            className='container has-text-centered' 
            style={{marginTop: '50px'}} 
            justify="center" 
            align="center"
        >
            <DreamForm
                style={{marginBottom: '20px'}} 
                handleAddDream={this.props.handleAddDream}
            />
            <div className='columns is-multiline'>
                {this.props.items.map((item) => (
                    <DreamItem 
                        key={item.id}
                        item={item}
                        handleDeleteDream={this.props.handleDeleteDream}
                    />
                    ))
                }
            </div>   
        </div>
    )
  }
}


export default DreamContent
