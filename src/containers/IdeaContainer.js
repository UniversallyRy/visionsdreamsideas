import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IdeaContent from '../components/Ideas/IdeaContent';
import {
    addIdea,
    deleteIdea,
    editIdea,
    saveIdeaEdit,
    cancelIdeaEdit,
} from '../actions/index';

class IdeaContainer extends Component {
    handleAddIdea = itemValue => this.props.handleAddIdea(itemValue);
    handleDeleteIdea = selectedItemId => this.props.handleDeleteIdea(selectedItemId);
    handleSelectEditIdea = id => this.props.handleSelectEditIdea(id);
    handleSaveEdit = modifiedItem => this.props.handleSaveEdit(modifiedItem);
    handleEditCancel = selectedItemId => this.props.handleEditCancel(selectedItemId);
      
  render( ) {
    return <IdeaContent {...this.props} />
  }
}

const mapStateToProps = state => ({
    items: state.ideas.items,
    editingIdea: state.ideas.editingIdea,
});

const mapDispatchToProps = {
    handleAddIdea: addIdea,
    handleDeleteIdea: deleteIdea,
    handleSelectEditIdea: editIdea,
    handleSaveEdit: saveIdeaEdit,
    handleEditCancel: cancelIdeaEdit,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(IdeaContainer)
);
