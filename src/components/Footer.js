import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  return (
    <p>
      <span>Show: </span>
      <button><FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink></button>
      {' '}
      <button><FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink></button>
      {' '}
      <button><FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink></button>
    </p>
  )
}

export default Footer;