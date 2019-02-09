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
            <h1 className='title is-1'>Dream Journal</h1>
            <h6 className='subtitle is-6'>Help yourself rememeber your dreams</h6>
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