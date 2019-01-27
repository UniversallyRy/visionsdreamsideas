import React, { Component } from 'react';
import VisionContainer from '../containers/VisionContainer';
import ToggleTab from './ToggleTab';


class App extends Component {
  state={
    showSidebar:false,
  }

  render() {
    // const { showSidebar } = this.state;
    return (
      <div >
        <ToggleTab/>
        <VisionContainer/>
      </div>
    );
  }
}

export default App;
