import React, { Component } from 'react';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
// import PropTypes from 'prop-types'

export class App extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    const { contacts, name } = this.state;
    e.preventDefault();
    this.setState({ contacts: [...contacts, ...[name]] });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form
            value={name}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}

export default App;

/* Шаг 1
Приложение должно состоять из формы и списка контактов. На текущем шаге реализуй добавление имени контакта и отображение списка контактов. Приложение не должно сохранять контакты между разными сессиями (обновление страницы).

Используй эту разметку инпута с встроенной валидацией для имени контакта.

<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
Состояние хранящееся в родительском компоненте <App> обязательно должно быть следующего вида, добавлять новые свойства нельзя.

state = {
  contacts: [],
  name: ''
}
Каждый контакт должен быть объектом со свойствами name и id. Для генерации идентификаторов используй любой подходящий пакет, например nanoid. После завершения этого шага, приложение должно выглядеть примерно так. */
