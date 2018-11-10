import React, { Component } from 'react';
import { Donut, Legend } from 'britecharts-react';
//import { connect } from 'react-redux';
//import _ from 'lodash';

class DoughnutChart extends Component {

    getData() {
        const data = [
            {
                quantity: 35,
                percentage: 35,
                name: 'Payment history',
                id: 1
            },
            {
                quantity: 10,
                percentage: 10,
                name: 'Amount of new credit',
                id: 2
            },
            {
                quantity: 10,
                percentage: 10,
                name: 'Types of credit used',
                id: 3
            },
            {
                quantity: 15,
                percentage: 15,
                name: 'Length of credit history',
                id: 4
            },
            {
                quantity: 30,
                percentage: 30,
                name: 'Outstading debt',
                id: 5
            }
        ];

        return data;
    }



    render() {

        return (
            <div className='center-helper'>
                <div className='doughnut-chart-wrapper'>
                    <Donut
                        colorSchema={['#F45C43', '#6aedc7', '#39c2c9', '#ffce00', 'orange']}
                        data={this.getData()}
                        externalRadius={150}
                        internalRadius={87}
                        highlightSliceById={1}
                        hasFixedHighlightedSlice={true}
                    />
                </div>
            </div>
        );
    }
}

export default DoughnutChart;