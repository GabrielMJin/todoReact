/* eslint-disable linebreak-style */
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../utils/api';

export default function index({ rows = [], columns = [], setRows }) {
  const deletarUsuario = async (id) => {
    try {
      await api.delete(`/user/${id}`);
      const novaTabela = rows.filter((row) => row.id !== id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.name}>
                {column.render
                  ? column.render(row[column.name])
                  : row[column.name]}
              </td>
            ))}
            <Button className="mr-2">Editar</Button>
            <Button variant="danger" onClick={() => deletarUsuario(row.id)}>Deletar Usuário</Button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
