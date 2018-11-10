import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { Icon } from 'semantic-ui-react';

class CustomizedDot extends Component {
    render(){
        const {cx, cy, stroke, payload, value} = this.props;

        if (payload.new) {
            return (
                <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
                <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"/>
                </svg>
            );
        } else {
            return 'r: 8';
        }
    }
}

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
                <p className="desc" style={{fontWeight: '600', color: 'black', marginTop: '-10px'}}>{payload[0].payload.summary}</p>
            </div>
            );
        }

        return null;
    }
}

export default class CredabilityLineChart extends Component{

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
            {date: 'Sep-2018', cscore: '710', inc: true, summary: 'Bills payed & EMIs settled on time.'},
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
                    <ReferenceLine y={700} strokeWidth={3} label="Threshold (700)" stroke="#21ba45"/>
                    <Line dot={<CustomizedDot />} type="monotone" dataKey="cscore" strokeWidth={3} stroke="#8884d8" />
                </LineChart>
                <p style={{textAlign: 'center', marginLeft: '10%'}}>Months</p>
            </div>
        );
    }
}