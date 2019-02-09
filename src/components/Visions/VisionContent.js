import React, { Component } from 'react';
import VisionItem from './VisionItem';
import VisionForm from './VisionForm';


class VisionContent extends Component {
    
      
  render( ) {
     const { items, handleAddVision, handleDeleteVision, handleDeleteVisionTodo } = this.props;
    return (
        <div
            className='container has-text-centered' 
            style={{marginTop: '50px'}} 
            justify="center" 
            align="center"
        >
            <h1 className='title is-1'>Vision Board</h1>
            <h6 className='subtitle is-6'>What do you see for your future and the steps you need to take to achieve your goals?</h6>
            <VisionForm
                style={{marginBottom: '20px'}} 
                handleAddVision={handleAddVision}
            />
            <div className='visionsList'>
            {items.map((item) => (
                <VisionItem 
                    key={item.id}
                    item={item}
                    handleDeleteVision={handleDeleteVision}
                    handleDeleteVisionTodo={handleDeleteVisionTodo}
                />
            ))}
            </div>   
        </div>
    )
  }
}

export default VisionContent