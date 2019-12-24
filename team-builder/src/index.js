import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react';
import Form from "./Components/Form"
import MemberList from "./Components/MemberList"

function App() {

    const member = {id: Date.now(), name: "Adrian Parra", email : "adrianparra@lambda.com", role: "student",team: "julie"}

    const [memberList, setMemberList] = useState([member]);

    const [memberToEdit, setMemberToEdit] = useState({});

    const [teamList, setTeamList] = useState(["julie"]);


    const addNewMember = member => {
        debugger

        if(member.id){
            
            //find obj that matches
            const editting = memberList.findIndex(mem =>mem.id === member.id);

            const newList = [...memberList];
            
            newList.splice(editting,1)

            const changedMember = {
                id : member.id,
                name : member.name,
                role: member.role,
                email: member.email,
                team: member.team
            }

            console.log("found", editting);


            const newMemberCollection = [...newList, changedMember];

            newMemberCollection.sort((f,s)=> f.id - s.id )

            setMemberList(newMemberCollection);
            return 
        }
        const newMember = {
            id: Date.now(),
            name: member.name,
            role: member.role,
            email: member.email,
            team: member.team
        }

        const newTeam = member.team.toLowerCase(); 

        setTeamList([...teamList, newTeam]);

        console.log(newMember,"out of changed")
        const newMemberCollection = [...memberList, newMember];

        setMemberList(newMemberCollection);
    };

    const editMember = memberEdit => {
        console.log(memberEdit);
        setMemberToEdit(memberEdit);
    }

    return (
        <div className="App">

        <h1>Member Form</h1>

        <Form addNewMember={addNewMember} memberToEdit={memberToEdit}/>

        <MemberList members={memberList} teams={teamList} editMember={editMember}/>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
