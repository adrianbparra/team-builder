import React from 'react';

function MemberList( {members} ) {



    return (
        <div className="list-container">
            {/* map data for list and display */}
            {members.map(member => (
                <div className="member-container" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                    <button>edit</button>
                </div>
            ))}
        </div>
    )
}

export default MemberList;