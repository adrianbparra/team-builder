import React, { useState } from "react";

function Form() {


    return (
        <form className="form">
            <label htmlFor="name">Name</label>
            <input id="name" type="name" name="name"></input>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"></input>
            <button>Submit</button>
        </form>
    )
}

export default Form;