import React, { Component } from 'react';
import { Tab, Popup, Icon, List } from 'semantic-ui-react';
import Speedometer from './speedometer';
import PaymentHistory from './payment_history';
import OutstandingDebt from './outstanding_debt';
import TypesOfCreditUsed from './types_of_credit_used';
import AmountOfNewCredit from './amount_of_new_credit';
import LengthOfCreditHistory from './length_of_credit_history';
import DoughnutChart from './doughnut_chart';

export default class Home extends Component{

    renderTabs(){
        return [
            { menuItem: 'Payment History', render: () => <Tab.Pane attached={false}><PaymentHistory /></Tab.Pane> },
            { menuItem: 'Outstanding Debt', render: () => <Tab.Pane attached={false}><OutstandingDebt /></Tab.Pane> },
            { menuItem: 'Length of Credit History', render: () => <Tab.Pane attached={false}><LengthOfCreditHistory /></Tab.Pane> },
            { menuItem: 'Types of Credit used', render: () => <Tab.Pane attached={false}><TypesOfCreditUsed /></Tab.Pane> },
            { menuItem: 'Amount of New Credit', render: () => <Tab.Pane attached={false}><AmountOfNewCredit /></Tab.Pane> },
        ];
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        <h1 className="main-body-header">
                            Credometer&nbsp;
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
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'red', marginRight: '1em'}}></div> 
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
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'yellow', marginRight: '1em'}}></div>  Credit score is  &nbsp;<b> good</b>.
                                        </div>
                                    </List.Item>
                                    <List.Item>
                                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                            <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'green', marginRight: '1em'}}></div> Credit score is &nbsp; <b> excellent</b>.
                                        </div>
                                    </List.Item>
                                </List>
                            </Popup>
                        </h1>
                    </div>
                    <div style={{borderBottom: '2px dashed #efefef', marginBottom: '1em'}}>
                        <Speedometer />
                    </div>
                    <div>
                        <h1 className="main-body-header">
                            Contributing Factors for credit score
                        </h1>
                    </div>
                    <div style={{margin: '3em 0'}}>
                        <DoughnutChart />
                    </div>
                    <div style={{marginLeft: '-2.5em'}}>
                        <Tab menu={{ secondary: true }} panes={this.renderTabs()} />
                    </div>
                </div>
            </div>
        );
    }
}