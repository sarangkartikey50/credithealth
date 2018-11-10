import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Speedometer from './speedometer';
import { Divider } from 'semantic-ui-react';

export default class SideMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary vertical style={{fontFamily: "'Google Sans', sans-serif"}}>
          <Link to='/'>
            <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} >
              {/* <Icon name='home' color='green' /> */}
              Home
            </Menu.Item>
          </Link>
          <Link to='/credability'>
            <Menu.Item name='Credability' active={activeItem === 'Credability'} onClick={this.handleItemClick} >
              {/* <Icon name='chart line' color='blue' /> */}
              Credit Health Line
            </Menu.Item>
          </Link>
          <Link to='/loan'>
            <Menu.Item name='Loan' active={activeItem === 'Loan'} onClick={this.handleItemClick} >
              {/* <Icon name='student' color='yellow' /> */}
              Loan
            </Menu.Item>
          </Link>
          <Divider />
          <Link to='/subscriptions'>
            <Menu.Item name='Subscriptions' active={activeItem === 'Subscriptions'} onClick={this.handleItemClick} >
              {/* <Icon name='time' color='red' /> */}
              Subscribe
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    )
  }
}