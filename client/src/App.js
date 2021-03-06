import React from 'react';
import './App.scss';
import useApplicationData from './hooks/useApplicationData'
function App() {
  
  const {state, dispatch} = useApplicationData();


  const userList = state.users.map(user=> <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>)

  return (
    <div className="App">

    <h1>List of users</h1>

      <h2>Cool!</h2>
      
      <h3>Extra cool</h3>
      
    <ul>
      {userList}
    
    </ul>


    </div>
  );
}

export default App;
