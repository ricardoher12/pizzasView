import React, { useCallback, useContext } from 'react';
import Header from './header';
import Menu from './menu';
import PizzaDetail from './pizzaDetail';
import { GlobalContext } from './GlobalState';
import './public/style/pizzas.css';

function Pizzas() {
  const {
    isLoading, pizzaList, togglePizzaFavorite, modifyPizza,
  } = useContext(GlobalContext);

  const heartFavoriteHandler = useCallback((e, pizzaRec) => {
    e.preventDefault();
    togglePizzaFavorite(pizzaRec);
  }, []);

  const onModifyHandler = useCallback((e, pizzaRec) => {
    e.preventDefault();
    modifyPizza(pizzaRec);
  }, []);

  /* useEffect(() => {
    console.log('has changed');
  }, [pizzaList]); */

  const hideMessage = (pizzaList !== []);

  if (isLoading) {
    return (
      <div className="container" id="loading">
        <div className="ring">
          Cargando
          <span className="ringSpan" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Menu />
      <section className="no-padding portfolio" id="pizzaList">
        <div className="container-fluid">
          <div className="row ">
            <div className="title col-md-2 col-sm-12">
              <div>OBSERVA TUS</div>
              <div className="title-color">RECETAS!</div>
            </div>
            <div className="title col-md-10 col-sm-12">
              <div id="emptyMessage" hidden={hideMessage}>
                <h1>
                  No tienes recetas creadas
                </h1>
                <h2>
                  Pasa a la sección de creación de recetas y da rienda suelta a tu imaginacion
                </h2>
              </div>
              <div className="row no-gutter popup-gallery">
                {pizzaList.map((pizzaRec) => {
                  return (
                    <PizzaDetail
                      key={pizzaRec.id}
                      pizzaRec={pizzaRec}
                      onHeartFavoriteHandler={heartFavoriteHandler}
                      onModifyHandler={onModifyHandler}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pizzas;
