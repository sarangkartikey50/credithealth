import React, { Component } from 'react';
import '../style/app.css';
import Credability from './credability';
import Loan from './loan';
import Home from './home';
import Footer from './footer';
import Subscribe from './subscribe';
import NavBar from './navbar';
import SideMenu from './side_menu';
import { Sticky } from 'semantic-ui-react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div className="router-container">
            <div className="side-menu-wrapper">
              <Sticky>
                <SideMenu />
              </Sticky>
            </div>
            <div className="main-body-wrapper">
              <Route exact path='/' component={Home} />
              <Route path='/credability' component={Credability} />
              <Route path='/loan' component={Loan} />
              <Route path='/subscriptions' component={Subscribe} />
              {/* <div style={{marginBottom: 50}}>
                <div className='message-wrapper' style={{margin: '2em 90px'}}>
                  <Message style={{fontFamily: 'Montserrat'}}
                    className='custom-message'
                    icon='bullhorn'
                    header='Have you heard about our mailing list?'
                    content='Get the best news in your e-mail every day.'
                  />
                </div>
                <div className='center-helper margin-bottom-50'>
                  <div style={{display: 'inline-flex', alignItems: 'center'}}>
                    <Speedometer />
                    <DoughnutChart />
                  </div>
                </div>
                <StackedBarChart />
              </div> */}
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
