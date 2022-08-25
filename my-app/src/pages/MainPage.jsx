import React from 'react';
import {YogaPreview} from '../cmps/YogaPreview.jsx';

class MainPage extends React.Component {
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
          <YogaPreview />
        </div>
      );
    }
  }

  export {MainPage};