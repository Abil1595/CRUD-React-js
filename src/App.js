import React, { useState } from 'react';
import { Data } from './Data/data';
import UserList from './UserList';
import UserForm from './UserForm';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [users, setUsers] = useState(Data);
  const [editingUser, setEditingUser] = useState(null);

  const renumberUsers = (users) => {
    return users.map((user, index) => ({
      ...user,
      id: index + 1
    }));
  };

  const addUser = (user) => {
    const newId = users.length ? Math.max(users.map(u => u.id)) + 1 : 1;
    setUsers(renumberUsers([...users, { ...user, id: newId }]));
  };

  const updateUser = (user) => {
    setUsers(renumberUsers(users.map(u => (u.id === user.id ? user : u))));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(renumberUsers(updatedUsers));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    
    <Container className="App" style={{border:'2px solid skyblue',padding:'20px',marginTop:'20px',marginBottom:'20px',borderRadius:'5px'}}>
      <h2 style={{ textAlign: 'center' }}>CRUD OPERATION USING REACT JS</h2><br />
      <Row>
        <Col md="1"></Col>
        <Col md="10">
          <UserForm
            onAddUser={addUser}
            onUpdateUser={updateUser}
            editingUser={editingUser}
          />
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row>
        <Col md="1"></Col>
        <Col md="10">
          <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
        </Col>
        <Col md="1"></Col>
      </Row>
    </Container>
  );
}

export default App;
