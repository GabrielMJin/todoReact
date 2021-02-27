/* eslint-disable linebreak-style */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import ListView from '../../components/ListView';

const columns = [
  {
    name: 'id',
    value: '#',
  },
  {
    name: 'name',
    value: 'Name',
  },
  {
    name: 'email',
    value: 'Email',
  },
];

export default function index() {
  return (
    <Page title="User">
      <ListView columns={columns} endpoint="/user" />
      <Button as={Link} to="/create">Cadastrar Usuário</Button>
      <Button>Delete</Button>
    </Page>

  );
}
