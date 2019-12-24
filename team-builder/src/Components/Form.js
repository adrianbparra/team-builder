import React, { useState, useEffect } from "react";

function Form( { addNewMember, memberToEdit }) {

    const [member, setNewMember] = useState({ name: "", role: "", email: "",team: ""})

    useEffect(()=>{
        setNewMember({name:"",role:"", email:"",team:""});

        setNewMember(memberToEdit)
    },[memberToEdit])

    const handleChanges = e => {

        setNewMember({ ...member, [e.target.name]: e.target.value})
        console.log(member)
    }

    const submitForm = e =>{
        e.preventDefault();

        addNewMember(member);

        setNewMember({name:"",role:"", email:"",team:""});
    }

    let submitButtonText;
    if(member.id){
        submitButtonText = "Change"
    } else {
        submitButtonText = "Submit"
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                id="name" 
                type="name" 
                name="name" 
                onChange={handleChanges}
                value={member.name}
            ></input>
            <label htmlFor="role">Role</label>
            <input 
                id="role" 
                type="text" 
                name="role" 
                onChange={handleChanges}
                value={member.role}
            ></input>
            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                name="email"
                value={member.email} 
                onChange={handleChanges}
            ></input>
            <label htmlFor="team">Team</label>
            <input 
                id="team" 
                type="text" 
                name="team" 
                onChange={handleChanges}
                value={member.team}
            ></input>
            <button type="submit">
                {submitButtonText}
            </button>
        </form>
    )
}

export default Form;