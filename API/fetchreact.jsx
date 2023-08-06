//////   Below is the to use API in react applications
//////  It cant be ran here just for information purpose


import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.data))
      .catch(error => console.log('Error'));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;