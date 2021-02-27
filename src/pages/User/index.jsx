/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

// import { toast } from 'react-toastify';
import Page from '../../components/Page';
import UserForm from '../../components/User/UserForm';
// import TodoList from '../../components/Todo/TodoList';

import axios from '../../utils/api';

export default function Index() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('/user');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Cadastrar Usuário">
      <UserForm users={users} setUsers={setUsers} />
      {/* <TodoList users={users} setUsers={setUsers} /> */}
    </Page>
  );
}
