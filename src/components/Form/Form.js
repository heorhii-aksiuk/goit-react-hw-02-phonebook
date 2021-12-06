import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {};

  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
