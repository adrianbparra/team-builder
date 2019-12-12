import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react';
import Form from "./Components/Form"
import MemberList from "./Components/MemberList"

function App() {

    const member = {id: Date.now(), name: "Adrian Parra", email : "adrianparra@lambda.com", role: "student"}

    const [teamList, setTeamMemberList] = useState([member]);

    const [memberToEdit, setMemberToEdit] = useState({});


    const addNewMember = member => {
        debugger

        if(member.id){

            //find obj that matches
            const editting = teamList.findIndex(mem =>mem.id === member.id);

            // console.log(editting);

            // console.log(teamList);

            const newList = [...teamList];
            
            newList.splice(editting,1)

            // console.log(newList,"new List");
            const changedMember = {
                id : member.id,
                name : member.name,
                role: member.role,
                email: member.email
            }
            //loop through list
            // loop through items and then change info
            //set new list

            console.log("found", editting);
            // setTeamMemberList(...teamList, {id: member.id , name: [editting.name]})

            

            const newMemberCollection = [...newList, changedMember];

            newMemberCollection.sort((f,s)=> f.id - s.id )

            setTeamMemberList(newMemberCollection);
            return 
        }
        const newMember = {
            id: Date.now(),
            name: member.name,
            role: member.role,
            email: member.email
        }

        console.log(newMember,"out of changed")
        const newMemberCollection = [...teamList, newMember];

        setTeamMemberList(newMemberCollection);
    };

    const editMember = memberEdit => {
        console.log(memberEdit);
        setMemberToEdit(memberEdit);
    }

    return (
        <div className="App">

        <h1>Member Form</h1>

        <Form addNewMember={addNewMember} memberToEdit={memberToEdit}/>

        <MemberList members={teamList} editMember={editMember}/>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
