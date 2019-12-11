import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react';
import Form from "./Components/Form"
import MemberList from "./Components/MemberList"

function App() {

  const member = {id: 12, name: "Adrian Parra", email : "adrianparra@lambda.com", role: "student"}

  const [teamList, setTeamMemberList] = useState([member]);

  const [memberToEdit, setMemberToEdit] = useState({});


  const addNewMember = member => {
    const newMember = {
        id: Date.now(),
        name: member.name,
        role: member.role,
        email: member.email
    }

    const newMemberCollection = [...teamList, newMember];

    setTeamMemberList(newMemberCollection);
  };

  return (
    <div className="App">

      <h1>Member List</h1>

      <Form addNewMember={addNewMember}/>

      <MemberList members={teamList}/>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
