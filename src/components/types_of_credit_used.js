import React, { Component } from 'react';
import CreditCard from './credit_card';
import '../style/credit_card.css';
import { List, Image } from 'semantic-ui-react';
import student from '../resources/images/icons/student.png';
import car from '../resources/images/icons/car.png';
import Recommendation from './recommendation';

const data = {
    header: 'Types of Credit Used',
    list: [
        'The contribution of this category increases with respect to the credit mix you have credit [accounts you have, including revolving debt (such as credit cards) and installment loans (such as mortgages, home equity loans, auto loans, student loans and personal loans).',
        'Apply for and open new credit accounts only as needed.',
    ]
};

export default class TypesOfCreditUsed extends Component{
    render(){
        return(
            <div>
                <div style={{display: 'inline-flex', marginLeft: '8%', marginTop: '2em'}}>
                    <div className="gradient1" style={{width: 'fit-content', borderRadius: '10px', marginRight: '20px'}}>
                        <CreditCard />
                    </div>
                    <div className="gradient2" style={{width: 'fit-content', borderRadius: '10px'}}>
                        <CreditCard />
                    </div>
                </div>
                <h3 className="main-body-header" style={{marginTop: '2em'}}>Types of Credit</h3>
                <div style={{marginTop: '1em'}}>
                    <List divided relaxed>
                        <List.Item style={{fontFamily:'Montserrat'}}>
                            <Image src={student} avatar size='mini' />
                            <List.Content>
                                <List.Header as='a'>Student Loan</List.Header>
                                <List.Description as='a'> <p className="types-of-credit-used-list-item">20/06/2013 | ₹40,00,000.00</p> </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item style={{fontFamily:'Montserrat'}}>
                            <Image src={car} avatar size='mini' />
                            <List.Content>
                                <List.Header as='a'>Car Loan</List.Header>
                                <List.Description as='a'> <p className="types-of-credit-used-list-item">19/06/2017 | ₹5,00,000.00</p> </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
                <Recommendation data={data} />
            </div>
        );
    }
}