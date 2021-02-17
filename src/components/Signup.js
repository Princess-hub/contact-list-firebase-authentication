import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import  {signup}  from "../actions/authActions";

class Signup extends Component {
    constructor(props) {
        super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
    }
}
handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value, 
      });
};
handleSubmit = (e) => {
    e.preventDefault();
    this.props.Signup(this.state);
    this.setState({
         username: "",
        email: "",
        password: "",
    })
}
    render() {
        return (
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                <h1>SignUp here</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" placeholder="username" name="username"
                            value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="email" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="Signup">
                        Create Contact
                </Button>
                </Form>
            </div>
        );
    }
}
const mapDispatchToProps = { 
     Signup: signup

}

export default connect(null, mapDispatchToProps)(Signup);
