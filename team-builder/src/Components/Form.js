import React, { useState } from "react";

function Form( { addNewMember }) {

    const [member, setNewMember] = useState({name: "", role: "", email: ""})

    const handleChanges = e => {

        setNewMember({ ...member, [e.target.name]: e.target.value})
        console.log(member)
    }

    const submitForm = e =>{
        e.preventDefault();

        addNewMember(member)
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" type="name" name="name" onChange={handleChanges}></input>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={handleChanges}></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" onChange={handleChanges}></input>
            <button onChange={handleChanges}>Submit</button>
        </form>
    )
}

export default Form;