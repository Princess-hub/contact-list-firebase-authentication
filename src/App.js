import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';

class App extends Component {
 
  // addNewContact = (contact) => {
  //   contact.id=Math.random().toString()
  //   this.setState({
  //     contacts: [...this.state.contacts, contact ]
  //   })
  // }
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
              <AddContactForm />
            </Col>
            <Col>
            <h3>All Contacts</h3>
              <Contacts  
              // contactsData={this.state.contacts}
               deleteContact={this.deleteContact} 
              editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

