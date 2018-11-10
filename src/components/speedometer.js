import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

export default class Speedometer extends Component {
    render(){
        return(
                <div className="speedometer-wrapper">
                    <ReactSpeedometer
                        value={710}
                        segments={4}
                        minValue={300}
                        maxValue={900}
                        width={300}
                        height={250}
                        needleTransitionDuration={4000}
                        needleTransition='easeElastic'
                        currentValueText='Your credit score: ${value}'
                    />
                </div>
        );
    }
}
