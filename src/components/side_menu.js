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
          <Link to='/credithealth/'>
            <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} >
              {/* <Icon name='home' color='green' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
              <span className="menu-item-text">Home</span>
            </Menu.Item>
          </Link>
          <Link to='/credithealth/credability'>
            <Menu.Item name='Credability' active={activeItem === 'Credability'} onClick={this.handleItemClick} >
              {/* <Icon name='chart line' color='blue' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"/></svg>
              <span className="menu-item-text">Credit Health Line</span>
            </Menu.Item>
          </Link>
          <Link to='/credithealth/loan'>
            <Menu.Item name='Loan' active={activeItem === 'Loan'} onClick={this.handleItemClick} >
              {/* <Icon name='student' color='yellow' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h3z"/></svg>
              <span className="menu-item-text">Loan</span>
            </Menu.Item>
          </Link>
          <Divider />
          <Link to='/credithealth/subscriptions'>
            <Menu.Item name='Subscriptions' active={activeItem === 'Subscriptions'} onClick={this.handleItemClick} >
              {/* <Icon name='time' color='red' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
              <span className="menu-item-text">Subscribe</span>
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    )
  }
}