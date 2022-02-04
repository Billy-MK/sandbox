import './App.css';
import Form from './components/Form/Form'
import UserList from './components/UserList/UserList';
import React, {useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserSubmission = (user) => {
    setUsers([...users, user]);
    console.log(users);
  }

  return (
    <div className="App">


      <Form onSubmitUser={handleUserSubmission} />
      <UserList />
    </div>
  );
}

export default App;
