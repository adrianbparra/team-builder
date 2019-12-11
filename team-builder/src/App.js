import React, { useState } from 'react';
import './App.css';
import Form from "./Components/Form"
import MemberList from "./Components/MemberList"

function App() {

  const member = {id: 12, name: "Adrian Parra", email : "adrianparra@lambda.com", role: "student"}

  const [teamMember, newTeamMember] = useState([member]);

  return (
    <div className="App">

      <h1>Member List</h1>

      <Form addNewMember={addNewMember}/>

      <MemberList members={teamMember}/>

    </div>
  );
}

export default App;
