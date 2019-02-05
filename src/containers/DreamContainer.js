import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DreamContent from '../components/Dreams/DreamContent';
import {
    addDream,
    deleteDream,
    editDream,
    saveDreamEdit,
    cancelDreamEdit,
} from '../actions/index';

class DreamContainer extends Component {
    handleAddDream = itemValue => this.props.handleAddDream(itemValue);
    handleDeleteDream = selectedItemId => this.props.handleDeleteDream(selectedItemId);
    handleSelectEditDream = id => this.props.handleSelectEditDream(id);
    handleSaveEdit = modifiedItem => this.props.handleSaveEdit(modifiedItem);
    handleEditCancel = selectedItemId => this.props.handleEditCancel(selectedItemId);
      
  render( ) {
    return <DreamContent {...this.props} />
  }
}

const mapStateToProps = state => ({
    items: state.dreams.items,
    editingDream: state.dreams.editingDream,
});

const mapDispatchToProps = {
    handleAddDream: addDream,
    handleDeleteDream: deleteDream,
    handleSelectEditDream: editDream,
    handleSaveEdit: saveDreamEdit,
    handleEditCancel: cancelDreamEdit,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(DreamContainer)
);
