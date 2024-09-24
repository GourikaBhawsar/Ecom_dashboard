import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })

    const handlelogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        } else {
            alert("please enter connect details")
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputbox" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} value={email} />
            <input type="password" className="inputbox" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} value={password} />
            <button type="button" onClick={handlelogin} className="button">Login</button>
        </div>
    )
}
export default Login