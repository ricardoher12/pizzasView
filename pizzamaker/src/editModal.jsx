import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { formas, sizes } from './constValues';

function EditModal({
  props, showModal, setShow, onModifyHandler,
}) {
  const {
    id, favorite, hasBorder, image,
  } = props;

  let {
    name, ingredients, size, form,
  } = props;

  const [newName, setNewName] = useState(name);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newSize, setNewSize] = useState(size);
  const [newForm, setNewForm] = useState(form);
  // const [newSize, setNewSize] = useState(size);
  // const [newForm, setNewForma] = useState(form);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewIngredients = (event) => {
    setNewIngredients(event.target.value);
  };

  const handleClose = () => {
    setShow(false);
    setNewName(name);
    setNewIngredients(ingredients);
    setNewSize(size);
    setNewForm(form);
  };

  const handleChangeSize = (event) => {
    setNewSize(event.target.value);
  };

  const handleChangeForm = (event) => {
    setNewForm(event.target.value);
  };

  console.log(`EditModal: ${form} ${size} ${favorite} ${hasBorder} ${image}`);

  return (
    <div>
      <Form>
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="idControl">
              <Form.Label>ID</Form.Label>
              <Form.Control as="textarea" rows={1} value={id} readOnly />
            </Form.Group>
            <Form.Group controlId="nameControl">
              <Form.Label>Nombre</Form.Label>
              <Form.Control as="textarea" rows={1} value={newName} onChange={handleChangeName} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tamaño</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="sizeControl"
                custom
                value={newSize}
                onChange={handleChangeSize}
              >
                { sizes.map((tamaño) => {
                  return (
                    <option value={tamaño} key={tamaño}>{tamaño}</option>
                  );
                }) }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Forma</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="formControl"
                custom
                value={newForm}
                onChange={handleChangeForm}
              >
                { formas.map((forma) => {
                  return (
                    <option value={forma} key={forma}>{forma}</option>
                  );
                }) }
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="ingredientsControl">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control as="textarea" rows={1} value={newIngredients} onChange={handleNewIngredients} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button
              variant="primary"
              onClick={(e) => {
                name = newName;
                ingredients = newIngredients;
                size = newSize;
                form = newForm;
                onModifyHandler(e, {
                  id, name, image, form, size, ingredients, hasBorder, favorite,
                });
                handleClose();
              }}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
}

export default EditModal;
