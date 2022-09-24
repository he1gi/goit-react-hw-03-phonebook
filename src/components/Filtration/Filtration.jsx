import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filtrarion.styled';

function Filtration({ filter, onFilterHandle }) {
  return (
    <label>
      Write a name to find the contact:
      <Input
        type="text"
        value={filter}
        name="filter"
        onChange={onFilterHandle}
      ></Input>
    </label>
  );
}

Filtration.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterHandle: PropTypes.func.isRequired,
};

export default Filtration;
