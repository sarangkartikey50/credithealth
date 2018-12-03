import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

export default class Speedometer extends Component {
    render(){
        return(
                <div className="speedometer-wrapper">
                    <ReactSpeedometer
                        value={71}
                        segments={6}
                        minValue={0}
                        maxValue={100}
                        width={300}
                        height={250}
                        needleTransitionDuration={4000}
                        needleTransition='easeElastic'
                        currentValueText='Your risk score: ${value}'
                    />
                </div>
        );
    }
}
