import React from 'react';
import PropTypes from 'prop-types';
import { Btn, List, Item } from './Contacts.styled';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Btn type="button" name="delete" onClick={() => onDeleteContact(id)}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
