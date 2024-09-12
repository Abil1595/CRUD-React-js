import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const UserForm = ({ onAddUser, onUpdateUser, editingUser }) => {
  const [user, setUser] = useState({ id: '', name: '', email: '', number: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ id: '', name: '', email: '', number: '' });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }
    setUser({ id: '', name: '', email: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="id">ID</Label>
        <Input
          type="text"
          name="id"
          id="id"
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="number">Number</Label>
        <Input
          type="number"
          name="number"
          id="number"
          value={user.number}
          onChange={(e) => setUser({ ...user, number: e.target.value })}
          required
        />
      </FormGroup>
      <Button color="primary" type="submit">
        {editingUser ? 'Update User' : 'Add User'}
      </Button>
    </Form>
  );
};

export default UserForm;
