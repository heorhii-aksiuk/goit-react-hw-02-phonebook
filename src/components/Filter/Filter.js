import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <input value={value} onChange={onChange}></input>
      </>
    );
  }
}

export default Filter;
