import React, { Component } from 'react';
import EmiNmiCircularElement from './emi_nmi_circular_element';
import {Input, Popup, Icon, List, Button} from 'semantic-ui-react';

export default class EmiNmiRatio extends Component {

    constructor(props){
        super(props);
        this.state = {emi: '', nmi: 50000, ratio: '', category: '', checkClicked: false,
            sizeClass: [
                'emi-nmi-circular-element-small first-gradient',
                'emi-nmi-circular-element-small second-gradient',
                'emi-nmi-circular-element-small third-gradient',
                'emi-nmi-circular-element-small fourth-gradient',
                'emi-nmi-circular-element-small five-gradient'
            ],
            resultText: [
                '😁 Yayyyy! Chances are high.',
                '😄 Hmmm! Good to go.',
                '🙂 Hmmm! Good to go.',
                '😅 You might get the loan.',
                '🙄 Sorry! You\'re not eligible'
            ], index: ''
        };
    }

    onEmiValueChange(e){
        this.setState({emi: e.target.value});
        if(e.target.value == ''){
            this.setState({
                sizeClass: [
                    'emi-nmi-circular-element-small first-gradient',
                    'emi-nmi-circular-element-small second-gradient',
                    'emi-nmi-circular-element-small third-gradient',
                    'emi-nmi-circular-element-small fourth-gradient',
                    'emi-nmi-circular-element-small five-gradient'
                ],
                checkClicked: false
            });
        }
    }

    onCheckClicked(){
        if(this.state.emi == ''){
            alert('please enter some EMI value!');
            return;
        }
        this.setState({checkClicked: true});
        let ratio = (this.state.emi/this.state.nmi)*100;
        this.setState({ratio: ratio});
        if(ratio <= 20){
            this.state.index = 0;
            this.state.sizeClass[0] = 'emi-nmi-circular-element-large first-gradient';
            this.state.sizeClass[1] = 'emi-nmi-circular-element-small second-gradient';
            this.state.sizeClass[2] = 'emi-nmi-circular-element-small third-gradient';
            this.state.sizeClass[3] = 'emi-nmi-circular-element-small fourth-gradient';
            this.state.sizeClass[4] = 'emi-nmi-circular-element-small five-gradient';
        } else if(ratio > 20 && ratio <= 30){
            this.state.index = 1;
            this.state.sizeClass[1] = 'emi-nmi-circular-element-large second-gradient';
            this.state.sizeClass[0] = 'emi-nmi-circular-element-small first-gradient';
            this.state.sizeClass[2] = 'emi-nmi-circular-element-small third-gradient';
            this.state.sizeClass[3] = 'emi-nmi-circular-element-small fourth-gradient';
            this.state.sizeClass[4] = 'emi-nmi-circular-element-small five-gradient';
        } else if(ratio > 30 && ratio <= 40){
            this.state.index = 2;
            this.state.sizeClass[2] = 'emi-nmi-circular-element-large third-gradient';
            this.state.sizeClass[0] = 'emi-nmi-circular-element-small first-gradient';
            this.state.sizeClass[1] = 'emi-nmi-circular-element-small second-gradient';
            this.state.sizeClass[3] = 'emi-nmi-circular-element-small fourth-gradient';
            this.state.sizeClass[4] = 'emi-nmi-circular-element-small five-gradient';
        } else if(ratio > 40 && ratio <= 50){
            this.state.index = 3;
            this.state.sizeClass[3] = 'emi-nmi-circular-element-large fourth-gradient';
            this.state.sizeClass[0] = 'emi-nmi-circular-element-small first-gradient';
            this.state.sizeClass[1] = 'emi-nmi-circular-element-small second-gradient';
            this.state.sizeClass[2] = 'emi-nmi-circular-element-small third-gradient';
            this.state.sizeClass[4] = 'emi-nmi-circular-element-small five-gradient';
        } else if(ratio > 50){
            this.state.index = 4;
            this.state.sizeClass[4] = 'emi-nmi-circular-element-large five-gradient';
            this.state.sizeClass[0] = 'emi-nmi-circular-element-small first-gradient';
            this.state.sizeClass[1] = 'emi-nmi-circular-element-small second-gradient';
            this.state.sizeClass[2] = 'emi-nmi-circular-element-small third-gradient';
            this.state.sizeClass[3] = 'emi-nmi-circular-element-small fourth-gradient';
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h3 className='emi-nmi-header'>EMI/NMI
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
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#1488CC ', marginRight: '1em'}}></div><b> excellent</b> &nbsp; chance.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#6aedc7', marginRight: '1em'}}></div><b> very good</b> &nbsp; chance.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#ffce00', marginRight: '1em'}}></div><b> good</b> &nbsp; chance.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: 'orange', marginRight: '1em'}}></div><b>low</b> &nbsp; chance.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                        <div style={{height: '20px', width: '20px', borderRadius: '10px', background: '#F45C43', marginRight: '1em'}}></div> 
                                        <b>Not eligible</b> &nbsp; for loan.
                                    </div>
                                </List.Item>
                            </List>
                        </Popup>
                    </h3>
                    <p className='emi-nmi-subheader'>Ratio of EMI (Equated Monthly Installments) and NMI (Net Monthly Income)</p>
                </div>
                <div style={{margin: '0 auto', display: 'block', width: 'fit-content'}}>
                    <div className='emi-nmi-circular-elements-wrapper'>
                        <EmiNmiCircularElement class={this.state.sizeClass[0]} value={[0, '<20%']} />
                        <EmiNmiCircularElement class={this.state.sizeClass[1]} value={['>20%', '<30%']} />
                        <EmiNmiCircularElement class={this.state.sizeClass[2]} value={['>30%', '<40%']} />
                        <EmiNmiCircularElement class={this.state.sizeClass[3]} value={['>40%', '<50%']} />
                        <EmiNmiCircularElement class={this.state.sizeClass[4]} value={[0, '>50%']} />
                    </div>
                </div>
                <div className="center-helper">
                    <Input labelPosition='right' type='number' placeholder='Loan Amount'>
                        <input onChange={this.onEmiValueChange.bind(this)} value={this.state.emi} className='width-300' placeholder="Enter desired EMI amount (per month)" />
                        <Button onClick={this.onCheckClicked.bind(this)}>CHECK</Button>
                    </Input>
                </div>
                <div className="center-helper">
                    <p style={{fontSize: '1.2em', fontWeight: '500', color: '#777'}}>{this.state.checkClicked != '' ? this.state.resultText[this.state.index] : ''}</p>
                </div>
            </div>
        );
    }
}