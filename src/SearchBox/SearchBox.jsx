import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';
//import { Test } from './SearchBox.styles';

const SearchBox = (props) => (
  <div className="SearchBoxWrapper">
    <input type='search' placeholder='Search'></input>
  </div>
);

SearchBox.propTypes = {
  // bla: PropTypes.string,
};

SearchBox.defaultProps = {
  // bla: 'test',
};

export default SearchBox;
