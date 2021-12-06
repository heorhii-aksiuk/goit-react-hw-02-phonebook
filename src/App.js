import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';

export class App extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { contacts, name, number } = this.state;
    const id = nanoid();
    e.preventDefault();
    this.setState({ contacts: [...contacts, { id, name, number }] });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form
            name={name}
            number={number}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
