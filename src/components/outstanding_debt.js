import React, { Component } from 'react';
import OutstandingDebtChart from './outstanding_debt_chart';
import Recommendation from './recommendation';

const data = {
    header: 'Outstanding Debt',
    list: [
        'You need to keep your loans less than 30% of your max credit limit. Use Yodlee\'s save for goals to help lessen the amount you need to take from card loans.',
        'Don\'t close unused credit cards as a short-term strategy to raise your scores.',
        'Don\'t open a number of new credit cards that you don\'t need, just to increase your available credit: this approach could backfire and actually lower your credit scores.',
    ]
};

export default class OutstandingDebt extends Component{
    render(){
        return(
            <div>
                <OutstandingDebtChart />
                <Recommendation data={data} />
            </div>
        );
    }
}