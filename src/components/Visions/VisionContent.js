import React, { Component } from 'react';
import VisionItem from './VisionItem';
import VisionForm from './VisionForm';


class VisionContent extends Component {
    
      
  render( ) {
    return (
        <div style={{marginTop: '50px', backgroundColor: 'brown'}} justify="center" align="center">

            <VisionForm 
                handleAddVision={this.props.handleAddVision}
            />


            {this.props.items.map((item) => (

                <VisionItem 
                    key={item.id}
                    item={item}
                />
                ))
            }
                {/* {this.state.visions.map((item) => (
                    <div key={item.id}>
                        {
                            this.state.editingVision.id === item.id ? (
                                <VisionEdit
                                item={this.state.editingVision}
                                handleSaveEdit={this.props.handleSaveEdit}
                                handleEditCancel={this.props.handleEditCancel}
                                />)
                            :    
                                (<VisionItem
                                    item={item}
                                    handleDeleteTodo={this.props.handleDeleteTodo}
                                    handleSelectEditTodo={this.props.handleSelectEditTodo}
                                />)
                        }
                    </div>
                ))} */}
                
        </div>
    )
  }
}


export default VisionContent