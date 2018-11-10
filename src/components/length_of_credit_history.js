import React, { Component } from 'react';
import Recommendation from './recommendation';
import RangeIndicator from './range_indicator';
import { Popup, Icon, List } from 'semantic-ui-react';

const data = {
    header:'Length of Credit History',
    list: [
        'Closing your credit card can hurt your credit score badly.',
        'To maintain a healthy history, keep taking small credits in regular intervals and repaying them on time.',
        'If you have been managing credit for a short time, don\'t open a lot of new accounts too rapidly.',
    ]
};

export default class LengthOfCreditHistory extends Component {
    render(){
        return(
            <div>
                <div>
                <h3 className="main-body-header">
                            Credit Age&nbsp;
                            <Popup
                                style={{border: 'none'}}
                                trigger={
                                    <Icon style={{fontSize: '20px', color: '#8884d8'}} name="info circle" />
                                }
                                basic
                            >
                                <List>
                                    <List.Item>
                                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#F45C43', marginRight: '1em'}}></div> 
                                            Credit score is &nbsp;<b>very low</b>.
                                        </div>
                                    </List.Item>
                                    <List.Item>
                                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'orange', marginRight: '1em'}}></div> Credit score is  &nbsp;<b> average</b>.
                                        </div>
                                    </List.Item>
                                    <List.Item>
                                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#ffce00', marginRight: '1em'}}></div>  Credit score is  &nbsp;<b> good</b>.
                                        </div>
                                    </List.Item>
                                    <List.Item>
                                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#6aedc7', marginRight: '1em'}}></div> Credit score is &nbsp; <b> excellent</b>.
                                        </div>
                                    </List.Item>
                                </List>
                            </Popup>
                        </h3>
                    </div>
                <div style={{display: 'inline-flex', marginTop: '2em'}}>
                    <p style={{fontWeight: '500', marginRight: '1em'}}>Your credit age is 10 months</p>
                    <span style={{fontSize: '22px', color: '#777', marginTop: '-2px', marginRight: '1em'}}>|</span>
                    <RangeIndicator />
                </div>
                <div><p style={{fontWeight: '500', color: '#777', marginTop: '1em', float: 'right'}}>*Minimum credit age should 6 months.</p></div>
                <Recommendation data={data} />
            </div>
        );
    }
}