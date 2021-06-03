import { UsersContextConsumer } from '../context/UsersContext';
import { ThemeContextConsumer } from '../context/ThemeContext';
import UserCard from './UserCard';
import { LogInContextConsumer } from '../context/LogInContext';
import AddUser from './AddUser';

function UserList () {
  return (
    <div>
      <ThemeContextConsumer>
        {({ theme }) => (
          <UsersContextConsumer>
            {({ users, deleteUser, createUser }) => (
              <LogInContextConsumer>
                {({ isLoggedIn }) => (
                  <>
                    {isLoggedIn ? <AddUser theme={theme} users={users} function={createUser}/> : null}
                    <div className={'userList'}>
                      {users.map(user => (
                        <UserCard key={user.id} user={user} theme={theme} isLoggedIn={isLoggedIn}
                                  btnFunction={deleteUser}/>
                      ))}
                    </div>
                  </>
                )}
              </LogInContextConsumer>
            )}
          </UsersContextConsumer>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

export default UserList;
