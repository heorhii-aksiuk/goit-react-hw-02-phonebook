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
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id} name={name}>
              <p>
                {name} : {number}
              </p>
              <button onClick={() => onRemoveClick(id)} type="button">
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
