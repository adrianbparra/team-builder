import React from 'react';

function MemberList( {members, editMember} ) {

    // const editOption = (member) =>{
        
    //     console.log(member)
    //     // editMember(member);
        
    // }

    return (
        <div className="list-container">
            {/* map data for list and display */}
            <h1>Member List</h1>
            {members.map(member => (
                <div className="member-container" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                    <p>Team: {member.team}</p>
                    <button onClick={()=>{editMember(member)}}>edit</button>
                </div>
            ))}
        </div>
    )
}

export default MemberList;