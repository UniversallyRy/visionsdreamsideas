import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VisionContent from '../components/Visions/VisionContent';
import {
    addVision,
    deleteVision,
    editVision,
    saveEdit,
    cancelEdit,
    deleteVisionTodo
} from '../actions/index';

class VisionContainer extends Component {
    handleAddVision = itemValue => this.props.handleAddVision(itemValue);
    handleDeleteVision = selectedItemId => this.props.handleDeleteVision(selectedItemId);
    handleDeleteVisionTodo = id => this.props.handleDeleteVisionTodo(id); 
    handleSelectEditVision = id => this.props.handleSelectEditVision(id);
    handleSaveEdit = modifiedItem => this.props.handleSaveEdit(modifiedItem);
    handleEditCancel = selectedItemId => this.props.handleEditCancel(selectedItemId);
      
  render( ) {
    return <VisionContent {...this.props} />
  }
}

const mapStateToProps = state => ({
    items: state.visions.items,
    editingVision: state.visions.editingVision,
});

const mapDispatchToProps = {
    handleAddVision: addVision,
    handleDeleteVision: deleteVision,
    handleSelectEditVision: editVision,
    handleSaveEdit: saveEdit,
    handleEditCancel: cancelEdit,
    handleDeleteVisionTodo: deleteVisionTodo,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(VisionContainer)
);
