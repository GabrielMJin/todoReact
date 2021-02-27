/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Row, Form, Col, Button,
} from 'react-bootstrap';

// import { toast } from 'react-toastify';
import axios from '../../utils/api';

export default function UserForm() {
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/user', user);
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <Row>
        <Col lg={9} xl={9}>
          <Form.Group>
            <Form.Control
              required
              value={user.name}
              name="name"
              onChange={onChange}
              placeholder="Nome"
            />
          </Form.Group>
        </Col>
        <Col lg={9} xl={9}>
          <Form.Group>
            <Form.Control
              required
              value={user.email}
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Email"
            />
          </Form.Group>
        </Col>
        <div>
          <Button className="ml-3" disabled={!user.name.trim() || !user.email.trim()} type="submit">Adicionar Usuário</Button>
          <Button className="ml-2" as={Link} to="/">Ver Lista de usuário</Button>
        </div>
      </Row>
    </Form>
  );
}
