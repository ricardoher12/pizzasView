import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-default navbar-fixed-top">
      <div className="navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pizzas" className="nav-link">
              Ver Pizzas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createPizza" className="nav-link">
              Create Pizza
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
