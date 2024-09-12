import React from 'react';
import { Table, Button } from 'reactstrap';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td>
              <Button color="warning" onClick={() => onEdit(user)}>Edit</Button>{' '}
              <Button color="danger" onClick={() => onDelete(user.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
