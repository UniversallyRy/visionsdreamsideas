import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VisionContainer from '../containers/VisionContainer';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  state={
    showSidebar:false,
  }

  render() {
    return (
      <Router>
        <section className='hero is-primary is-bold is-fullheight'>
          <Header />
          <div className='hero-body is-primary'>
            <Route path='/Visions' component={VisionContainer} />
          </div>  
          <Footer />
        </section>
      </Router>  
    );
  }
}

export default App;