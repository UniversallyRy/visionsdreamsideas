import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import VisionContainer from '../containers/VisionContainer';
import DreamContainer from '../containers/DreamContainer';
import IdeaContainer from '../containers/IdeaContainer';
import Header from './Header';
import Footer from './Footer';


const App = () => {
    return (
      <Router>
        <section className='hero is-primary is-bold is-fullheight'>
          <Header />
          <div className='hero-body is-primary'>
            <Route path='/visions' component={VisionContainer} />
            <Route path='/dreams' component={DreamContainer} />
            <Route path='/ideas' component={IdeaContainer} />
          </div>  
          <Footer />
        </section>
      </Router>  
    );
}

export default App