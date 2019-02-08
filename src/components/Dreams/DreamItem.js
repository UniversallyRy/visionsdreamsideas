import React, { Component } from 'react';

const Modal = ({ children, closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <div 
          className='hero is-primary is-medium'
          style={{borderRadius: '7px', border: '1px purple solid',}}
          >
          <header className="hero-head modal-card-head has-background-info">
            <div className="modal-card-title">{title}</div>
            <button className="delete" onClick={closeModal} />
          </header>
          <section className="hero-body has-text-centered">
            <div className="content is-clipped">
              {children}
            </div>
          </section>
          <footer 
            className="has-background-info hero-foot"
            style={{borderRadius:'3px'}}
          >
            <p className="button" onClick={closeModal}>Close</p>
            <p className="button" onClick={closeModal}>Edit</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default class DreamItem extends Component {
  state = {
      modalState: false,
  }

  toggleModal = () => {    
    this.setState((prev) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  render() {
    return (

      <div 
        className="column is-half has-background-info"
        id={this.props.item.id}
        style=
          {{
          cursor: 'pointer',
          marginBottom: '10px',
          border: '1px black solid',
          borderRadius: '6px',}}
      >
        <div 
          className='level has-text-primary' 
          onClick={this.toggleModal}
        >  
          <p className='level-left'>{this.props.item.title}</p>
          <div className='level-right'>
            <p className='level-item'>{this.props.item.time}</p>
            <button 
              className="delete is-medium level-item"
              onClick={() => this.props.handleDeleteDream(this.props.item.id)}
              aria-label="delete"
            />
          </div>
        </div>
        <div>  
          <Modal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState} 
            title={this.props.item.title}
          >
            {this.props.item.text}
          </Modal>
        </div>  
      </div>

    )
  }
}