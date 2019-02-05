import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import VisionContainer from '../containers/VisionContainer';
import DreamContainer from '../containers/DreamContainer';
import IdeaContainer from '../containers/IdeaContainer';
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
            <Route path='/Dreams' component={DreamContainer} />
            <Route path='/Ideas' component={IdeaContainer} />
          </div>  
          <Footer />
        </section>
      </Router>  
    );
  }
}

export default App;