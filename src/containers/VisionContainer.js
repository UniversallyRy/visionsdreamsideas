import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisionContent from '../components/Visions/VisionContent';
import {
    addVision,
    deleteVision,
    editVision,
    saveEdit,
    cancelEdit,
} from '../actions/index';

class VisionContainer extends Component {
    handleAddVision = itemValue => this.props.handleAddVision(itemValue);
    handleDeleteVision = selectedItemId => this.props.handleDeleteVision(selectedItemId);
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisionContainer);
