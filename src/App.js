import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          first_name: "Prince",
          middle_name: "Yaw-Adom",
          last_name: "Mensah",
          phone_number: "0241159301",
          address: "N.T. 37 Tarkwa",
          email: "prince.mensah@gmail.com",
          type: "brother", 
          id: "102",
        },
        {
          first_name: "Princess",
          middle_name: "Linda",
          last_name: "Mensah",
          phone_number: "02452114050",
          address: "N.T. 37 Tarkwa",
          email: "princess.mensah@gmail.com",
          type: "sister", 
          id: "103",
        },
        {
          first_name: "James",
          middle_name: "Kwesi",
          last_name: "Mensah",
          phone_number: "0547202559",
          address: "N.T. 37 Tarkwa",
          email: "jkm.mensah@gmail.com",
          type: "brother", 
          id: "104",
        },        
      ]
    }

  }
  addNewContact = (contact) => {
    contact.id=Math.random().toString()
    this.setState({
      contacts: [...this.state.contacts, contact ]
    })
  }
  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: undeletedContacts
    })
  }
  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map(contact => contact.id === id ? updatedContact: contact)
    })
  }

  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h3>Add Contacts</h3>
              <AddContactForm addContact={this.addNewContact} />
            </Col>
            <Col>
            <h3>All Contacts</h3>
              <Contacts  contactsData={this.state.contacts} deleteContact={this.deleteContact} 
              editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

