import React, { Component } from 'react';
import VisionContainer from '../containers/VisionContainer';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  state={
    showSidebar:false,
  }

  render() {
    // const { showSidebar } = this.state;
    return (
      <section className='hero is-primary is-bold is-fullheight'>
        <Header />
        <div className='hero-body'>
          <VisionContainer />
        </div>  
        <Footer />
      </section>
    );
  }
}

export default App;