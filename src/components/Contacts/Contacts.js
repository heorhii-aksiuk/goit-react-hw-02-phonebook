import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { contacts, onRemoveClick } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li className={s.item} key={contact.id} name={contact.name}>
              <p>
                {contact.name} : {contact.number}
              </p>
              <button id={contact.id} onClick={onRemoveClick} type="button">
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Contacts;
