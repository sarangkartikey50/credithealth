import React, { Component } from 'react';
import PaymentHistoryChart from './payment_history_chart';
import Recommendation from './recommendation';

const data = {
    header: 'Payment History',
    list: [
        'Review your cScore reports on moneyCentre application of yodlee.',
        'Subscribe to yodlee ebill reminders which can help you avoid missing payment dates.',
        'Dispute incorrect late-payment entries.',
        'Late payments will remain on your credit report for 7 years. Keep in mind that the negative effect of the late payment will be lessened over time.',
        'Your bills must always be paid on time and reflect a “paid as agreed” status.',
        'Keep track of your bill payments on MoneyCentre.'
    ]
};

export default class PaymentHistory extends Component{
    render(){
        return(
            <div>
                <PaymentHistoryChart />
                <Recommendation data={data} />
            </div>
        );
    }
}