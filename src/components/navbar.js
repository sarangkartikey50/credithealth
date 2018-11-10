import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';

const logo = require('../resources/images/logo/logo.png')

class NavBar extends Component {
    render() {
        return (
            <Header className="navbar-header" as='h2'>
                <Image style={{height: 40, width: 40}} src={logo} />
                <Header.Content className='head-color' avatar>
                    cScore
                    <Header.Subheader>Beta</Header.Subheader>
                </Header.Content>
            </Header>
        );
    }
}

export default NavBar;