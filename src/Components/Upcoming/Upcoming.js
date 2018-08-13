import React, { Component } from 'react';

import MainMenu from '../Shared/MainMenu';

class Upcoming extends Component{
    render(){
        return(
          <div>
              <MainMenu />
              <h1>This is the Upcoming page!</h1>
          </div>
        );
    }
}

export default Upcoming;