import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.css';

export function Breadcrumb({ items }) {
  let currentPath = '';

  return (
    <nav className="breadcrumb">
      <div className="max-width breadcrumb-body">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <span className='greater'> &gt; </span>
          </li>

          {items.map((item, index) => {
            let linkPath = currentPath;
            if (index < items.length - 1) {
              currentPath  += `/${item.name}`;
            }

            return (
              <li key={index}>
                {index === items.length - 1 ? (
                  <span>{item.name}</span>
                ) : (
                  <Link to={currentPath}>
                    {item.name}
                  </Link>
                )}
                {index < items.length - 1 && <span className='greater'> &gt; </span>}

              </li>
            )
          })}
        </ul>

      </div>
    </nav>
  );
}
