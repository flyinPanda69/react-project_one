import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const [userList, setUserList] = useState([]);
  
  const getUserList=(uName,uAge)=>{
    setUserList((prevUsersList)=>{
      return [...prevUsersList, {
        name: uName,
        age : uAge
      }];
    });
  }
  return (
    <Fragment>
      <AddUser getUserListData={getUserList}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
