import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
