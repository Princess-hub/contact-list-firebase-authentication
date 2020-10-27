import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            middle_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            email: "",
            type: "",
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state)
        this.setState({
            first_name: "",
            middle_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            email: "",
            type: "",
        }); 
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>first_name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="first_name" 
                    value={this.state.first_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>middle_name</Form.Label>
                    <Form.Control type="middle_name" placeholder="Enter middle_name" name="middle_name" 
                    value={this.state.middle_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>last_name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last_name" name="last_name" 
                    value={this.state.last_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>phone_number</Form.Label>
                    <Form.Control type="number" placeholder="phone_number" name="phone_number" 
                    value={this.state.phone_number} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>address</Form.Label>
                    <Form.Control type="text-area" placeholder="Enter address" name="address" 
                    value={this.state.address} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" 
                    value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>type</Form.Label>
                    <Form.Control type="type" placeholder="Enter type" name="type" 
                    value={this.state.type} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Contact
                </Button>
            </Form>
        );
    }
}

export default AddContactForm;

