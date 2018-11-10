import React, { Component } from 'react';
import '../style/app.css';

export default class RangeIndicator extends Component{
    render(){
        return(
            <div style={{display: 'inline-flex'}}>
                <div style={{background: '#F45C43', height: '15px', width: '50px', borderBottomLeftRadius: '1em', borderTopLeftRadius: '1em'}}></div>
                <div className="range-indicator"  style={{background: 'orange', height: '15px', width: '50px'}}></div>
                <div style={{background: '#ffce00', height: '15px', width: '50px'}}></div>
                <div style={{background: '#6aedc7', height: '15px', width: '50px', borderBottomRightRadius: '1em', borderTopRightRadius: '1em'}}></div>
            </div>
        );
    }
}