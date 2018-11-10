import React, { Component } from 'react';
import Slider from 'rc-slider';
import '../../node_modules/rc-slider/assets/index.css';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { List } from 'semantic-ui-react';

class CustomToolTip extends Component {

    getListItem(payload){
        return payload.map(listItem => {
            if(listItem.name === 'threshold'){
                listItem.value = listItem.value + listItem.payload.min;
            }
            if(listItem.name === 'max'){
                listItem.value = listItem.value + listItem.payload.threshold + listItem.payload.min;
            }
            if(listItem.name === 'actual'){
                listItem.fill = '#4286f4'
            }
            return (
                <List.Item>
                    <List.Content>
                        <List.Header as='a'>
                            <div style={{color: `${listItem.fill}`}}>
                                {listItem.name}: {listItem.value}
                            </div>
                        </List.Header>
                    </List.Content>
                </List.Item>
            );
        });
    }

    render(){
        const {active, payload, label } = this.props;

        if(active){
            console.log(payload);
        }

        return(
            <div className="custom-tooltip">
                <h3>{label}</h3>
                <List divided verticalAlign='middle'>
                    {this.getListItem(payload)}
                </List>
            </div>
        );
    }
}

export default class StackedBarChart extends Component {

    constructor(props){
        super(props);
        this.state = {sliderValue: 750}
        this.data = []
    }

    onSliderChange(value){
        this.setState({sliderValue: value});
    }

    render(){

        this.data = [
            {name: 'Payment History', min: 300*.35, max: 900*.35, threshold: (700*.35).toFixed(2), actual: (this.state.sliderValue*.35).toFixed(2)},
            {name: 'Outstanding Debt', min: 300*.30, max: 900*.30, threshold: 700*.30, actual: (this.state.sliderValue*.30).toFixed(2)},
            {name: 'Length of Credit History', min: 300*.15, max: 900*.15, threshold: 700*.15, actual: (this.state.sliderValue*.15).toFixed(2)},
            {name: 'Types of Credit Used', min: 300*0.10, max: 900*.10, threshold: 700*.10, actual: (this.state.sliderValue*.10).toFixed(2)},
            {name: 'Amount of New Credit', min: 300*.10, max: 900*.10, threshold: 700*.10, actual: (this.state.sliderValue*.10).toFixed(2)},
        ]

        this.data = this.data.map(row => {
            return {
                name: row.name,
                min: row.min,
                threshold: row.threshold-row.min,
                max: row.max-(row.threshold),
                actual: row.actual
            }
        });

        return(
            <div className='center-helper'>
                <div className="card-wrapper" style={{height: 325}}>
                    <ComposedChart
                        layout={'vertical'}
                        width={1050}
                        height={300}
                        data={this.data}
                        margin={{top: 20, right: 30, left: 50, bottom: 5}}
                        barCategoryGap={5}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis type="number"/>
                        <YAxis type="category" dataKey="name"/>
                        <Tooltip content={<CustomToolTip />}/>
                        <Legend />
                        <Bar dataKey="min" stackId="a" fill="#f44336" />
                        <Bar dataKey="threshold" stackId="a" fill="#fb8c00" />
                        <Bar dataKey="max" stackId="a" fill="#4caf50" />
                        <Line strokeWidth={2} type='monotone' dataKey='actual' stroke='#d25050' />
                    </ComposedChart>
                </div>
                <br/>
                <div class='center-helper'>
                    {/* <Input size='small' placeholder='Enter...' style={{border: 'none',marginLeft: -15, width: 300}} /> */}
                    <Slider
                        className='slider'
                        defaultValue={750}
                        min={300}
                        max={900}
                        onChange={this.onSliderChange.bind(this)}
                    />
                    <div className='slider-value'>
                        <p>{this.state.sliderValue}</p>
                    </div>
                </div>
            </div>
        );
    }
}