import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Link.module.css';

export const Links = ({ name, to }) => {
  const local = useLocation();

  return (
    <li>
      <Link to={to} className={local.pathname === to ? styles.active : ''}>
        {name}
      </Link>
    </li>
  );
};
