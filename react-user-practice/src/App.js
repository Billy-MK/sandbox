import './App.css';
import Form from './components/Form/Form'
import UserList from './components/UserList/UserList';
import React, {useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);

  const handleUserSubmission = (user) => {
    setUsers([...users, {username: user.username, age: user.age, id: id}]);
    setId(prevId => {
      return prevId + 1
    })
  }

  const removeUser = (userId) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId)
    })
  }

  return (
    <div className="App">
      <Form onSubmitUser={handleUserSubmission} />
      <UserList removeUser={removeUser} users={users} />
    </div>
  );
}

export default App;
