import React, { Component } from 'react';
const Context = React.createContext();

//Contains state and actions that elements use to manipulate the state

//actions sent here and filtered with switch statement
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state, //auto grabs existing state (called spread operator)
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state, //auto grabs existing state (called spread operator)
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '777-777-7777'
      }
    ],
    dispatch: action => {
      //sends action to reducer? sets up global state variables
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
