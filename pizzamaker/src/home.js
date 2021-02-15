import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Menu from './menu';
import './public/style/home.css';

function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="jumbotron paral paralsec">
        <h1 className="display-3">Pizza Maker</h1>
        <p className="lead">Deja volar tu imaginación y crea las mejores recetas de pizzas</p>
        <p className="lead" />
        <div className="col text-center">
          <Link to="/createPizza">
            <button className="btn btn-info btn-lg btn-md" type="button">Crear nueva receta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
