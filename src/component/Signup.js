import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");




    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result))
        navigate('/')

    }


    return (
        <div className="register">
            <h1>Registration</h1>
            <input className="inputbox" required type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name" />
            <input className="inputbox" required type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            <input className="inputbox" required type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Create Password" />
            <button type="button" onClick={collectData} className="button">Sign Up</button>
        </div>
    )
}
export default Signup