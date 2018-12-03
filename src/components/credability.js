import React, { Component } from 'react';
import {Popup, Icon, Dropdown, List} from 'semantic-ui-react';
import CredabilityLineChart from './credability_line_chart';
import Transactions from './transactions';
import Speedometer from './speedometer';

const options = [
    { key: 1, text: '1 Years', value: 1 },
    { key: 2, text: '2 Years', value: 2 },
    { key: 3, text: '3 Years', value: 3 },
]

export default class Credability extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1 className="main-body-header">
                        Risk score&nbsp;
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
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'green', marginRight: '1em'}}></div> 80-100, Grade&nbsp; <b> A</b>.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#60d52e', marginRight: '1em'}}></div> 70-80, Grade &nbsp; <b> B</b>.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'yellow', marginRight: '1em'}}></div>  60-70, Grade &nbsp;<b> C</b>.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#efc521', marginRight: '1em'}}></div>  50-60, Grade  &nbsp;<b> D</b>.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'orange', marginRight: '1em'}}></div>35-50, Grade  &nbsp;<b> E</b>.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'red', marginRight: '1em'}}></div> 
                                        0-35, Grade &nbsp;<b>F</b>.
                                    </div>
                                </List.Item>
                            </List>
                        </Popup>
                    </h1>
                </div>
                <div style={{borderBottom: '2px dashed #efefef', marginBottom: '4em', paddingBottom: '2em'}}>
                    <Speedometer />
                </div>
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
            
            </div>
        );
    }
}