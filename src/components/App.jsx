import React, { Component } from 'react';

import Form from './Form';
import Section from './Section';
import Filtration from './Filtration';
import Contacts from './Contacts';

import { MAIN_WRAPPER } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const { contacts } = this.state;
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in your contacts list`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, data],
      };
    });
  };

  handleFilterInput = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  handleDeleteContact = deleteId => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => deleteId !== id) };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const identicFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(identicFilter)
    );
    return (
      <MAIN_WRAPPER>
        <Section title={'PhoneBook'}>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filtration filter={filter} onFilterHandle={this.handleFilterInput} />
          <Contacts
            contacts={filter ? filteredContacts : contacts}
            filter={identicFilter}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </MAIN_WRAPPER>
    );
  }
}
