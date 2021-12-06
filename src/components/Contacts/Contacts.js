import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} name={contact.name}>
              {contact.name} : {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Contacts;
