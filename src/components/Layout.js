import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">LOGO</Link>
        </div>
        {this.props.children}
        <div>FOOTER</div>
      </div>
    );
  }
}