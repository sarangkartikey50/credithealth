import React, { Component } from 'react';
import '../style/timeline.css';
import { Image, Icon, Accordion } from 'semantic-ui-react';
import baby from '../resources/images/icons/baby.png';

export default class Timeline extends Component{

    constructor(){
        super();
        this.state = {activeIndex: -1}
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    renderTimeline() {
        const { activeIndex } = this.state
        const data = [
            {date: 'Oct-2017', cscore: '650', inc: false, summary: 'New credit account added.', new: true},
            {date: 'Nov-2017', cscore: '670', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Dec-2017', cscore: '690', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Jan-2018', cscore: '710', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Feb-2018', cscore: '660', inc: false, summary: 'New credit account added.', new: true},
            {date: 'Mar-2018', cscore: '680', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Apr-2018', cscore: '700', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'May-2018', cscore: '670', inc: false, summary: 'You missed two bill payments.'},
            {date: 'Jun-2018', cscore: '690', inc: true, summary: 'You have taken a car loan'},
            {date: 'Jul-2018', cscore: '670', inc: false, summary: 'You missed two bill payments'},
            {date: 'Aug-2018', cscore: '700', inc: true, summary: 'Bills payed & EMIs settled on time.'},
            {date: 'Sep-2018', cscore: '710', inc: true, summary: 'Bills payed & EMIs settled on time.'},
        ];

        return data.map((row, index) => {
            return(
                <div key={index} className="container timeline-right">
                    <div className="timeline-content">
                        <div className="timeline-head">
                            <h3 className="timeline-content-date">{row.date}{row.new ? <Image src={baby} height={25} width={25} style={{marginLeft: '5px'}} /> : ''}</h3>
                            <span className="timeline-head-divider">|</span>
                            <div className="timeline-content-score">Credit Score: {row.cscore}{!row.inc ? <Icon name="arrow down" color="red"/> : <Icon name="arrow up" color="blue"/>}</div>
                        </div>
                        <div className="timeline-content-summary">
                            <p>{row.summary}</p>
                        </div>
                        <div className="timeline-content-transactions">
                            <Accordion>
                                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                Transactions
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === index}>
                                <p>
                                   Transactions for this month.
                                </p>
                                </Accordion.Content>
                            </Accordion>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="timeline">
                {this.renderTimeline()}
            </div>
        );
    }
}