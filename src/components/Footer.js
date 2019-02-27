import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  return (
    <p>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}><button>All</button></FilterLink>
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}><button>Active</button></FilterLink>
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}><button>Completed</button></FilterLink>
    </p>
  )
}

export default Footer;