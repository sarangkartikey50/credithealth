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

export default class AmountOfNewCreditChart extends Component{

    getData() {
        return [
            {'Months': 'Oct 17', 'New credits': '4'},
            {'Months': 'Nov 17', 'New credits': '1'},
            {'Months': 'Dec 17', 'New credits': '2'},
            {'Months': 'Jan 18', 'New credits': '0'},
            {'Months': 'Feb 18', 'New credits': '0'},
            {'Months': 'Mar 18', 'New credits': '1'},
            {'Months': 'Apr 18', 'New credits': '0'},
            {'Months': 'May 18', 'New credits': '0'},
            {'Months': 'Jun 18', 'New credits': '0'},
            {'Months': 'Jul 18', 'New credits': '1'},
            {'Months': 'Aug 18', 'New credits': '2'},
            {'Months': 'Sep 18', 'New credits': '0'},
        ];
    }

    render(){
        return(
            <div>
                <LineChart width={window.innerWidth - 340} height={400} data={this.getData()}
                            margin={{top: 5, right: 20, left: 0, bottom: 5}}>
                    <XAxis dataKey="Months" />
                    <YAxis label={{ value: 'No. of new credits', angle: -90, position: 'insideLeft' }}  domain={[0, 10]}  />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line connectNulls={true} type="monotone" dataKey="New credits" strokeWidth={3} stroke="#8884d8"/>
                </LineChart>
                <p style={{textAlign: 'center', marginLeft: '10%'}}>Months</p>
                <Recommendation data={data} />
            </div>
        );
    }
}