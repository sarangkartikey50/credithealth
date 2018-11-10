import React, { Component } from 'react';
import { Icon, Input, Button } from 'semantic-ui-react';

export default class Subscribe extends Component {
    render(){
        return(
            <div>
                <div className="center-helper">
                    <Icon name="send" size="big" color="red"/>
                </div>
                <div style={{display: 'block', margin:'1em auto 0em auto', width: 'fit-content'}}>
                    <h1>STAY TUNED<span style={{color: 'red'}}>.</span></h1>
                </div>
                <div className="center-helper">
                    <Input iconPosition='left' placeholder='Email' style={{width: '500px'}}>
                    <Icon name='at' />
                    <input />
                    </Input>
                </div>
                <div className="center-helper">
                    <Button color="red">Subscribe</Button>
                </div>
            </div>
        );
    }
}