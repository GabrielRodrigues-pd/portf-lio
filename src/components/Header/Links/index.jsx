import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Link.css';

export const Links = ({ name, to }) => {
  const local = useLocation();

  return (
    <li>
      <Link to={to} className={local.pathname === to ? 'active' : ''}>
        {name}
      </Link>
    </li>
  );
};
