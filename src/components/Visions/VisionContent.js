import React, { Component } from 'react';
import VisionItem from './VisionItem';
import VisionForm from './VisionForm';


class VisionContent extends Component {
    
      
  render( ) {
    return (
        <div
            className='container has-text-centered' 
            style={{marginTop: '50px'}} 
            justify="center" 
            align="center"
        >
            <h1 className='title'>What are your visions for the future?</h1>
            <h3 className='subtitle'>Jot some down</h3>
            <VisionForm
                style={{marginBottom: '20px'}} 
                handleAddVision={this.props.handleAddVision}
            />
            <div className='visionsList'>
            {this.props.items.map((item) => (

                <VisionItem 
                    key={item.id}
                    item={item}
                    handleDeleteVision={this.props.handleDeleteVision}
                />
                ))
            }
            </div>   
        </div>
    )
  }
}


export default VisionContent
