import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';

export class App extends Component {
  static propTypes = {};
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

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
          <Filter value={filter} onChange={this.handleFilter} />
          <Contacts contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}

export default App;

/* Добавь поле поиска, которое можно использовать для фильтрации списка контактов по имени.

Поле поиска это инпут без формы, значение которого записывается в состояние (контролируемый элемент).
Логика фильтрации должна быть нечувствительна к регистру.
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
} 

Когда мы работаем над новым функционалом, бывает удобно жестко закодировать некоторые данные в состояние. Это избавит от необходимости вручную вводить данные в интерфейсе для тестирования работы нового функционала. Например можно использовать такое начальное состояние.

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
*/
