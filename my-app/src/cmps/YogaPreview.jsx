import React from 'react';
import {YogaList} from '../cmps/YogaList.jsx';
import {poses} from '../services/YogaPoses.js';

class YogaPreview extends React.Component {
    // handleLoginClick() {
    //   this.setState({isLoggedIn: true});
    // }
  
    render() {
    //   const isLoggedIn = this.state.isLoggedIn;
    //   let button;
    //   if (isLoggedIn) {
    //     button = <LogoutButton onClick={this.handleLogoutClick} />;
    //   } else {
    //     button = <LoginButton onClick={this.handleLoginClick} />;
    //   }
  
      return (
        <div>
          <YogaList yogaPoses={poses}/>
        </div>
      );
    }
  }

  export {YogaPreview};