import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { Icon, Image, Input, Label, Select, Button, Modal, Header } from 'semantic-ui-react';
import Slider from 'rc-slider';
import happyIcon from '../resources/images/icons/happy.png';
import sadIcon from '../resources/images/icons/sad.png';
import '../../node_modules/rc-slider/assets/index.css';

const options = [
    { key: 'AUD', text: 'AUD', value: 'AUD' },
    { key: 'USD', text: 'USD', value: 'USD' },
    { key: 'INR', text: 'INR', value: 'INR' },
]


class CustomToolTip extends Component {
    render() {
        const { active } = this.props;

        if (active) {
            const { payload, label } = this.props;
            console.log(payload);
            return (
            <div className="custom-tooltip">
                <p className="label" style={{fontWeight: '600'}}>{`${label}`}</p>
                <p className="intro" style={{fontWeight: '600', color: 'black', marginTop: '-10px'}}>cscore: {`${payload[0].value}`} {!payload[0].payload.inc ? <Icon name="arrow down" color="red"/> : <Icon name="arrow up" color="blue"/>}</p>
                {/* <p className="desc" style={{fontWeight: '600', color: 'black', marginTop: '-10px'}}>{payload[0].payload.summary}</p> */}
            </div>
            );
        }

        return null;
    }
}

export default class LoanChart extends Component{

    constructor(props){
        super(props);
        this.state = {sliderValue: 500000, loanAmount: 0, cscore: 710, showMessage: false,modalOpen: false, loanApproved: false}
        this.data = []
    }

    handleOpen = () => {
        if(this.state.cscore >= this.getReferrenceValue()){
            this.setState({loanApproved: true, modalOpen: true})
        } else {
            this.setState({loanApproved: false, modalOpen: true})
        }
    }

    handleClose = () => this.setState({ modalOpen: false })

    onSliderChange(value){
        this.setState({sliderValue: value});
    }

    onLoanAmountChange(event){
        this.setState({loanAmount: event.target.value});
    }

    getReferrenceValue(){
        const { loanAmount } = this.state;
        if(loanAmount <= 500000 && loanAmount > 0){
            return 600
        } else if(loanAmount > 500000){
            return 750
        } else {
            return 0;
        }
    }

    getData() {
        return [
            {date: 'Oct-2017', cscore: '650', inc: false, summary: 'New credit account added.', new: true},
            {date: 'Nov-2017', cscore: '670', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Dec-2017', cscore: '690', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Jan-2018', cscore: '710', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Feb-2018', cscore: '660', inc: false, summary: 'New credit account added.', new: true},
            {date: 'Mar-2018', cscore: '680', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Apr-2018', cscore: '700', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'May-2018', cscore: '670', inc: false, summary: 'You missed two bill payments.'},
            {date: 'Jun-2018', cscore: '690', inc: true, summary: 'You have taken a car loan'},
            {date: 'Jul-2018', cscore: '670', inc: false, summary: 'You missed two bill payments.'},
            {date: 'Aug-2018', cscore: '700', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Sep-2018', cscore: '730', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Oct-2018', cscore: '710', inc: false, summary: 'You missed a bill payment.'},
        ];
    }

    render(){
        return(
            <div>
                <LineChart width={window.innerWidth - 370} height={400} data={this.getData()}
                            margin={{top: 5, right: 20, left: 0, bottom: 5}}>
                    <XAxis dataKey="date"/>
                    <YAxis label={{ value: 'Credit Score', angle: -90, position: 'insideLeft' }}  domain={[300, 900]} />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip content={<CustomToolTip/>}/>
                    <Legend />
                    <ReferenceLine y={this.getReferrenceValue()} strokeWidth={3} label={"required credit score"} stroke="#21ba45"/>
                    <Line type="monotone" dataKey="cscore" strokeWidth={3} stroke="#8884d8" />
                </LineChart>                <br/>
                {/* <div class='center-helper'>
                    <Slider
                        className='slider'
                        defaultValue={500000}
                        min={100000}
                        max={10000000}
                        onChange={this.onSliderChange.bind(this)}
                    />
                    <div className='slider-value'>
                        <p>₹{this.state.sliderValue}</p>
                    </div>
                </div> */}
                <div className="center-helper">
                    <Input labelPosition='right' type='number' placeholder='Loan Amount'>
                        <Select compact options={options} defaultValue='INR' style={{border: 'none', background: '#e8e8e8'}}/>
                        <input className='width-300' placeholder="Enter desired loan amount" onChange={this.onLoanAmountChange.bind(this)} />
                        <Button onClick={this.handleOpen}>CHECK</Button>
                    </Input>
                </div>
                <div className="center-helper">
                    <p style={{fontSize: '1em', fontWeight: '500', color: '#777'}}>*You can find the required credit score for particular loan amount.</p>
                </div>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                    {this.state.loanApproved ? <Header style={{ fontSize: '2em'}}><Image src={happyIcon} size="large" />Yay! You are eligible for this loan.</Header> : <Header style={{ fontSize: '2em'}}><Image src={sadIcon} size="large" />Oh no! You lie in the risk zone.</Header> }
                    <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}