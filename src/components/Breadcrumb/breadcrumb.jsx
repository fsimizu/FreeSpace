import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.css';

export function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <span className='greater'> &gt; </span>
        </li>

        {items.map((item, index) => (

          <li key={index}>
            {index === items.length - 1 ? (
              <span>{item.name}</span>
            ) : (
              <Link to={`/${item.name}`}>
                {item.name}
              </Link>
            )}
            {index < items.length - 1 && <span className='greater'> &gt; </span>}

          </li>
        ))}
      </ul>
    </nav>
  );
}
