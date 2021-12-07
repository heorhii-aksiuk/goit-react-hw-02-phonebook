import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <label>
          Find contacts by name
          <input value={value} onChange={onChange}></input>
        </label>
      </>
    );
  }
}

export default Filter;
