import React, { Component } from 'react';
import LoanChart from './loan_chart';
import { Popup, Icon } from 'semantic-ui-react';
import LoanRecommendation from './loan_recommendation';
import EmiNmiRatio from './emi_nmi_ratio';

const data = [
    {
        'header': 'Payment History',
        'list': [
            'Review your cScore reports on moneyCentre application of yodlee.',
            'Subscribe to yodlee ebill reminders which can help you avoid missing payment dates.',
            'Dispute incorrect late-payment entries.',
            'Late payments will remain on your credit report for 7 years. Keep in mind that the negative effect of the late payment will be lessened over time.',
            'Your bills must always be paid on time and reflect a “paid as agreed” status.',
            'Keep track of your bill payments on MoneyCentre.'
        ]
    },
    {
        'header': 'Outstanding Debt',
        'list': [
            'You need to keep your loans less than 30% of your max credit limit. Use Yodlee\'s save for goals to help lessen the amount you need to take from card loans.',
            'Don\'t close unused credit cards as a short-term strategy to raise your scores.',
            'Don\'t open a number of new credit cards that you don\'t need, just to increase your available credit: this approach could backfire and actually lower your credit scores.',
        ]
    },
    {
        'header': 'Length of Credit History',
        'list': [
            'Closing your credit card can hurt your credit score badly.',
            'To maintain a healthy history, keep taking small credits in regular intervals and repaying them on time.',
            'If you have been managing credit for a short time, don\'t open a lot of new accounts too rapidly.',
        ]
    },
    {
        'header': 'Types of Credit Used',
        'list': [
            'The contribution of this category increases with respect to the credit mix you have credit [accounts you have, including revolving debt (such as credit cards) and installment loans (such as mortgages, home equity loans, auto loans, student loans and personal loans).',
            'Apply for and open new credit accounts only as needed.',
        ]
    },
    {
        'header': 'Amount of New Credit',
        'list': [
            'New credit can make you seem risky to lenders, but don’t fear new accounts.',
            'Taking on too much new credit too quickly can hurt your credit score.',
            'Adding some “new credit” to an old, troubled account may actually help your score by decreasing your credit utilization ratio.'
        ]
    },
]

export default class Loan extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1 className="main-body-header">
                        Can my loan get approved?&nbsp;
                        {/* <Popup
                            trigger={
                                <Icon style={{fontSize: '20px', color: '#8884d8'}} name="info circle" />
                            }
                            content="The default theme's basic popup removes the pointing arrow."
                            basic
                        /> */}
                    </h1>
                </div>
                <div className='emi-nmi-ratio-wrapper'>
                        <EmiNmiRatio />
                </div>
                <div className="credability-chart-wrapper">
                    <LoanChart />
                </div>
                <LoanRecommendation data={data} />
            </div>
        );
    }
}