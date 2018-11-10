import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Footer extends Component {
    render(){
        return(
            <div style={{padding: '2em 5em', borderTop: '1px solid #efefefc4'}}>
                <List floated='right' horizontal>
                <List.Item disabled href='#' style={{fontWeight: '500'}}>
                    © Envestnet | Yodlee, Inc.
                </List.Item>
                <List.Item href='#' style={{fontWeight: '500'}}>Terms & Conditions</List.Item>
                <List.Item href='#' style={{fontWeight: '500'}}>Privacy Notice</List.Item>
                <List.Item href='#' style={{fontWeight: '500'}}>Security Policy</List.Item>
                <List.Item href='#' style={{fontWeight: '500'}}>Disclaimer</List.Item>
                </List>

                <List horizontal>
                <List.Item href='#' style={{fontWeight: '500'}}>About Us</List.Item>
                <List.Item href='#' style={{fontWeight: '500'}}>Jobs</List.Item>
                </List>
            </div>
        );
    }
}