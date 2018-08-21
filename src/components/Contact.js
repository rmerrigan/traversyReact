import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  onShowClick() {
    console.log('Hello');
  }

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body">
        <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  //type checking
  contact: PropTypes.object.isRequired
};

export default Contact;
