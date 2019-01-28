import React, { Component } from 'react';
import VisionItem from './VisionItem';
import VisionForm from './VisionForm';


class VisionContent extends Component {
    
      
  render( ) {
    return (
        <div style={{marginTop: '50px', backgroundColor: 'brown'}} justify="center" align="center">

            <VisionForm
                style={{marginBottom: '20px'}} 
                handleAddVision={this.props.handleAddVision}
            />

            <div className=''>
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
