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
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    const { contacts, name } = this.state;
    const id = nanoid();
    e.preventDefault();
    this.setState({ contacts: [...contacts, { name, id }] });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form
            value={name}
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
