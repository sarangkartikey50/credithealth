import React, { Component } from 'react';
import { Button, Popup, Header, Icon, Image, Modal, List } from 'semantic-ui-react';
import '../style/recommendation.css';

export default class Recommendation extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
       }
    }

    handleClick = () => {
        this.setState({
            isOpen: true
        });
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    renderList(){
        return this.props.data.list.map((item, index) => {
            return(
                <List.Item key={index} style={{fontSize: '1.1em', fontWeight: '500'}}>{index + 1}. {item}</List.Item>
            );
        });
    }

    render(){
        return(
            <div>
                <div className="floating-recommendation-button">
                    <Popup
                        style={{border: 'none', fontSize: '1em', fontWeight: '500', fontFamily: 'Montserrat', boxShadow: '0 1px 50px rgba(0, 0, 0, 0.2)'}}
                        trigger={<Button size='big' circular icon='lightbulb' onClick={this.handleClick} />}
                        content="Want to improve your credit score?"
                        basic inverted
                    />
                </div>
                <div>
                    <Modal open={this.state.isOpen} onClose={this.handleClose}>
                        <Modal.Header>What to do? ({this.props.data.header})</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                            <List>
                                {this.renderList()}
                            </List>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button disabled style={{background: 'transparent', color: 'black', fontFamily: 'Montserrat', fontWeight: '500'}}>87% people found it helpful!</Button>
                            <Button color='green' inverted onClick={this.handleClose}>
                                <Icon name='checkmark' /> Helpful
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        );
    }
}