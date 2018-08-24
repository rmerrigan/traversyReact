import React, { Component } from 'react';
import axios from 'axios';
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
    contacts: [],
    dispatch: action => {
      //sends action to reducer? sets up global state variables
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    //waits for data to be placed in res,
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
