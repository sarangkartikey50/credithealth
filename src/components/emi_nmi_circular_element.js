import React, { Component } from 'react';
import '../style/emi_nmi_circular_element.css';

export default class EmiNmiCircularElement extends Component {

    render(){
        return(
            <div className={`${this.props.class}`}>
                <div className="inner-content">
                    <h4 className='greater-than-value'>{this.props.value[0] != 0 ? `${this.props.value[0]}` : ``}</h4>
                    <h2 className='lesser-than-value'>{this.props.value[1] != 0 ? `${this.props.value[1]}` : ``}</h2>
                </div>
            </div>
        );
    }
}