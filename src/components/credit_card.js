import React, { Component } from 'react';
import '../style/credit_card.css';
import {Image} from 'semantic-ui-react';
import visa from '../resources/images/icons/visa.png';

export default class CreditCard extends Component{
    render(){
        return(
            <div>
                <div className="credit-card">
                    <div style={{float: 'right'}}>
                        <Image src={visa} style={{width: '65px', marginTop: '-20px'}} />
                    </div>
                    <div>
                            <p class="credit-card-field">Name</p>
                            <p class="credit-card-value">John Doe</p>
                        </div>
                        <div>
                            <p class="credit-card-field">Card Number</p>
                            <p class="credit-card-value">2548 4526 9851 5893</p>
                        </div>
                        <div>
                            <p class="credit-card-field">Expiry</p>
                            <p class="credit-card-value">09/2028</p>
                        </div>
                    </div>
            </div>
        );
    }
}