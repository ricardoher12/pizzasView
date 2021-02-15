import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Header from './header';
import Menu from './menu';
import { formas, sizes } from './constValues';

function CreatePizza() {
  const [name, setName] = useState('');

  const [size, setSize] = useState(sizes[0]);

  const [ingredients, setIngredients] = useState('');

  const [form, setForm] = useState(formas[0]);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const handleChangeForm = (event) => {
    setForm(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleIngredients = (event) => {
    setIngredients(event.target.value);
  };

  return (
    <div>
      <Header />
      <Menu />
      <Form>
        <Col xs={5} style={{ marginTop: '1.0rem' }}>
          <Form.Group controlId="nameControl">
            <Form.Label>Nombre</Form.Label>
            <Form.Control as="textarea" rows={1} cols={10} value={name} onChange={handleChangeName} />
          </Form.Group>
        </Col>
        <Form.Row style={{ marginLeft: '0.8rem' }}>
          <Col xs={2}>
            <Form.Group>
              <Form.Label>Tamaño</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="sizeControl"
                custom
                value={size}
                onChange={handleChangeSize}
              >
                { sizes.map((tamaño) => {
                  return (
                    <option value={tamaño} key={tamaño}>{tamaño}</option>
                  );
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group>
              <Form.Label>Forma</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="formControl"
                custom
                value={form}
                onChange={handleChangeForm}
              >
                { formas.map((forma) => {
                  return (
                    <option value={forma} key={forma}>{forma}</option>
                  );
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Col xs={5}>
          <Form.Group controlId="ingredientsControl">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control as="textarea" rows={2} value={ingredients} onChange={handleIngredients} />
          </Form.Group>
        </Col>
      </Form>
    </div>

  );
}

export default CreatePizza;
