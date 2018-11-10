import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import Recommendation from './recommendation';

const data = {
    header: 'Amount of New Credit',
    list: [
        'New credit can make you seem risky to lenders, but don’t fear new accounts.',
        'Taking on too much new credit too quickly can hurt your credit score.',
        'Adding some “new credit” to an old, troubled account may actually help your score by decreasing your credit utilization ratio.'
    ]
};

class CustomizedDot extends Component {
    render(){
        const {cx, cy, stroke, payload, value} = this.props;

        if (value == 700) {
            return (
                <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="violet" viewBox="0 0 1024 1024">
                <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"/>
                </svg>
            );
        } else {
            return 'r: 8';
        }
    }
}

export default class AmountOfNewCreditChart extends Component{

    getData() {
        return [
            {'Hard Enquiries': '0', cscore: '800'},
            {'Hard Enquiries': '2', cscore: '700'},
            {'Hard Enquiries': '4', cscore: '600'},
            {'Hard Enquiries': '6', cscore: '500'},
            {'Hard Enquiries': '8', cscore: '400'},
            {'Hard Enquiries': '10', cscore: '300'},
        ];
    }

    render(){
        return(
            <div>
                <LineChart width={window.innerWidth - 340} height={400} data={this.getData()}
                            margin={{top: 5, right: 20, left: 0, bottom: 5}}>
                    <XAxis dataKey="Hard Enquiries" label={{ value: 'Hard Enquiries', angle: 0, position: 'insideBottom' }}/>
                    <YAxis label={{ value: 'Credit Score', angle: -90, position: 'insideLeft' }}  domain={[300, 900]}  />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line connectNulls={true} dot={<CustomizedDot />} type="monotone" dataKey="cscore" strokeWidth={3} stroke="#8884d8"/>
                </LineChart>
                <Recommendation data={data} />
            </div>
        );
    }
}