import React, { useState } from 'react';
import EditModal from './editModal';
import './public/style/pizzaDetail.css';
import PizzaImage from './public/wallpaper.jpg';

const PizzaDetail = React.memo(({ pizzaRec, onHeartFavoriteHandler, onModifyHandler }) => {
  const {
    id, name, form, size, ingredients, favorite, hasBorder, image,
  } = pizzaRec;
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  // eslint-disable-next-line
  console.log(`PizzaDetail:${id} ${name} ${form} ${size} ${ingredients} ${favorite} ${hasBorder} ${image}`);
  console.log(pizzaRec);
  return (
    <div className="col-lg-4 col-sm-4">
      <EditModal
        props={pizzaRec}
        showModal={showModal}
        setShow={setShowModal}
        onModifyHandler={onModifyHandler}
      />
      <div className="portfolio-box">
        <img src={PizzaImage} className="img-responsive" alt="pizza" />
        <div className="portfolio-box-caption">
          <div className="portfolio-box-caption-content">
            <div className="title">
              {name}
            </div>
            <div className="description">
              Tamaño:&nbsp;
              {size}
            </div>
            <div className="description">
              Tiene orilla de queso:&nbsp;
              {hasBorder}
            </div>
            <div className="description">
              Forma:&nbsp;
              {form}
            </div>
            <div className="description">
              {ingredients}
            </div>
            <h4 className="card-title">
              <button type="button" className={favorite ? 'heartredbutton' : 'heartdarkbutton'} onClick={(e) => { onHeartFavoriteHandler(e, pizzaRec); }}>
                <i />
              </button>
            </h4>
            <div className="buttons">
              <button type="button" className="btn btn-outline-light mx-1" onClick={handleShow}>Modificar</button>
              <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PizzaDetail;
