import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersContext = React.createContext();
const { Provider, Consumer } = UsersContext;

function UsersContextProvider (props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(({ data: { data: userList } }) => {
        setUsers(userList);
      });
  }, []);

  function _deleteUser (userID) {
    setUsers(users.filter(user => user.id !== userID));
    console.log(users);
  }

  return (
    <Provider value={{
      users,
      deleteUser: _deleteUser
    }}>
      {props.children}
    </Provider>
  );
}

export { UsersContextProvider, Consumer as UsersContextConsumer };
