import React, { Component } from 'react';
import {Popup, Icon, Dropdown} from 'semantic-ui-react';
import CredabilityLineChart from './credability_line_chart';
import Transactions from './transactions';

const options = [
    { key: 1, text: '1 Years', value: 1 },
    { key: 2, text: '2 Years', value: 2 },
    { key: 3, text: '3 Years', value: 3 },
]

export default class Credability extends Component{
    render(){
        return(
            <div className="credability-wrapper">
                <div>
                    <div  style={{float: 'right'}}>
                        <Dropdown placeholder="Time Span" search options={options} selection />
                    </div>
                    <h1 className="main-body-header">
                        Credit Health Line&nbsp;
                        <Popup
                            trigger={
                                <Icon style={{fontSize: '20px', color: '#8884d8'}} name="info circle" />
                            }
                            content="The default theme's basic popup removes the pointing arrow."
                            basic
                        />
                    </h1>
                </div>
                <div className="credability-chart-wrapper">
                    <CredabilityLineChart />
                </div>
                <div>
                    <h1 className="main-body-header">
                        Monthly Glimpse&nbsp;
                        <Popup
                            style={{border: 'none'}}
                            trigger={
                                <Icon style={{fontSize: '20px', color: '#8884d8'}} name="info circle" />
                            }
                            content="Shows the summary of your transactions month-wise."
                            basic
                        />
                    </h1>
                </div>
                <div className="credability-transactions">
                    <Transactions />
                </div>
            </div>
        );
    }
}